import express, { Router } from 'express'
import Lesson from '../models/Lesson'

const router: Router = express.Router()

// Get all lessons
router.get('/', async (req, res) => {
  try {
    const { difficulty, category } = req.query
    const filter: any = { published: true }

    if (difficulty) filter.difficulty = difficulty
    if (category) filter.category = category

    const lessons = await Lesson.find(filter)
    res.json(lessons)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch lessons' })
  }
})

// Get lesson by ID
router.get('/:id', async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id)
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' })
    }
    res.json(lesson)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch lesson' })
  }
})

export default router
