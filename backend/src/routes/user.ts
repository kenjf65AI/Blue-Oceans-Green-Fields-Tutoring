import express, { Router } from 'express'
import User from '../models/User'
import { AuthRequest } from '../middleware/auth'

const router: Router = express.Router()

// Get user profile
router.get('/profile', async (req: AuthRequest, res) => {
  try {
    const user = await User.findById(req.userId).select('-password')
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' })
  }
})

// Update user profile
router.put('/profile', async (req: AuthRequest, res) => {
  try {
    const updates = req.body
    const user = await User.findByIdAndUpdate(
      req.userId,
      { $set: updates },
      { new: true }
    ).select('-password')

    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' })
  }
})

export default router
