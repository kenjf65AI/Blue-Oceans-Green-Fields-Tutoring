import express, { Router } from 'express'
import User from '../models/User'
import { AuthRequest } from '../middleware/auth'

const router: Router = express.Router()

// Get user progress
router.get('/', async (req: AuthRequest, res) => {
  try {
    const user = await User.findById(req.userId).select('progress profile')
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user.progress)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch progress' })
  }
})

// Update progress after lesson completion
router.post('/complete-lesson', async (req: AuthRequest, res) => {
  try {
    const { lessonId, score, timeSpent } = req.body

    const user = await User.findById(req.userId)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    // Update completed lessons
    if (!user.progress.completedLessons.includes(lessonId)) {
      user.progress.completedLessons.push(lessonId)
    }

    // Update skill scores
    user.progress.skillScores.set(lessonId, score)

    // Update total learning time
    user.progress.totalLearningTime += timeSpent

    // Update last activity date
    user.progress.lastActivityDate = new Date()

    // Update streak (simplified logic)
    const lastActivity = new Date(user.progress.lastActivityDate)
    const today = new Date()
    const daysDiff = Math.floor(
      (today.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24)
    )

    if (daysDiff === 1) {
      user.progress.currentStreak += 1
      if (user.progress.currentStreak > user.progress.longestStreak) {
        user.progress.longestStreak = user.progress.currentStreak
      }
    } else if (daysDiff > 1) {
      user.progress.currentStreak = 1
    }

    await user.save()

    res.json({
      message: 'Progress updated',
      progress: user.progress
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to update progress' })
  }
})

export default router
