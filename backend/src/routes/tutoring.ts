import express, { Router } from 'express'
import TutoringSession from '../models/TutoringSession'
import { AuthRequest } from '../middleware/auth'

const router: Router = express.Router()

// Get user's tutoring sessions
router.get('/', async (req: AuthRequest, res) => {
  try {
    const sessions = await TutoringSession.find({
      student: req.userId
    })
      .populate('tutor', 'name email')
      .sort({ scheduledDate: -1 })

    res.json(sessions)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sessions' })
  }
})

// Book new tutoring session
router.post('/book', async (req: AuthRequest, res) => {
  try {
    const { tutorId, scheduledDate, duration, topic, price } = req.body

    const session = new TutoringSession({
      student: req.userId,
      tutor: tutorId,
      scheduledDate,
      duration,
      topic,
      price,
      paid: false
    })

    await session.save()

    res.status(201).json({
      message: 'Session booked successfully',
      session
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to book session' })
  }
})

// Cancel tutoring session
router.post('/:id/cancel', async (req: AuthRequest, res) => {
  try {
    const session = await TutoringSession.findOne({
      _id: req.params.id,
      student: req.userId
    })

    if (!session) {
      return res.status(404).json({ error: 'Session not found' })
    }

    session.status = 'cancelled'
    await session.save()

    res.json({
      message: 'Session cancelled',
      session
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to cancel session' })
  }
})

export default router
