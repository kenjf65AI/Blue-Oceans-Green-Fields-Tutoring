import express, { Router } from 'express'
import Stripe from 'stripe'
import User from '../models/User'
import { AuthRequest } from '../middleware/auth'

const router: Router = express.Router()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia'
})

// Create subscription
router.post('/create-subscription', async (req: AuthRequest, res) => {
  try {
    const { plan, paymentMethodId } = req.body
    const user = await User.findById(req.userId)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    // Create or retrieve Stripe customer
    let customerId = user.subscription.stripeCustomerId

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        payment_method: paymentMethodId,
        invoice_settings: {
          default_payment_method: paymentMethodId
        }
      })
      customerId = customer.id
      user.subscription.stripeCustomerId = customerId
    }

    // Price IDs based on plan (these should be set in Stripe dashboard)
    const priceIds: Record<string, string> = {
      'self-paced': process.env.STRIPE_SELF_PACED_PRICE_ID || '',
      'premium': process.env.STRIPE_PREMIUM_PRICE_ID || ''
    }

    // Create subscription
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceIds[plan] }],
      expand: ['latest_invoice.payment_intent']
    })

    // Update user subscription
    user.subscription.plan = plan as 'self-paced' | 'premium'
    user.subscription.status = 'active'
    user.subscription.stripeSubscriptionId = subscription.id
    await user.save()

    res.json({
      message: 'Subscription created',
      subscriptionId: subscription.id
    })
  } catch (error) {
    console.error('Stripe error:', error)
    res.status(500).json({ error: 'Failed to create subscription' })
  }
})

// Cancel subscription
router.post('/cancel-subscription', async (req: AuthRequest, res) => {
  try {
    const user = await User.findById(req.userId)

    if (!user || !user.subscription.stripeSubscriptionId) {
      return res.status(404).json({ error: 'No active subscription found' })
    }

    await stripe.subscriptions.cancel(user.subscription.stripeSubscriptionId)

    user.subscription.status = 'cancelled'
    await user.save()

    res.json({ message: 'Subscription cancelled' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to cancel subscription' })
  }
})

export default router
