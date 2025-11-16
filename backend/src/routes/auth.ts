import express, { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'

const router: Router = express.Router()

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body

    // Check if user exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = new User({
      email,
      password: hashedPassword,
      name
    })

    await user.save()

    // Generate token
    const secret = process.env.JWT_SECRET || 'your-secret-key'
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '7d' })

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        subscription: user.subscription
      }
    })
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Find user
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // Generate token
    const secret = process.env.JWT_SECRET || 'your-secret-key'
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '7d' })

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        subscription: user.subscription,
        profile: user.profile
      }
    })
  } catch (error) {
    res.status(500).json({ error: 'Login failed' })
  }
})

export default router
