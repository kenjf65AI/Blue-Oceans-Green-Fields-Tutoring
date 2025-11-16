import express, { Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import rateLimit from 'express-rate-limit'

// Routes
import authRoutes from './routes/auth'
import userRoutes from './routes/user'
import lessonRoutes from './routes/lesson'
import progressRoutes from './routes/progress'
import tutoringRoutes from './routes/tutoring'
import paymentRoutes from './routes/payment'

// Middleware
import { errorHandler } from './middleware/errorHandler'
import { authenticate } from './middleware/auth'

dotenv.config()

const app: Application = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})
app.use('/api/', limiter)

// Database connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ai-tutor'
    await mongoose.connect(mongoURI)
    console.log('✅ MongoDB connected successfully')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    process.exit(1)
  }
}

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api/auth', authRoutes)
app.use('/api/users', authenticate, userRoutes)
app.use('/api/lessons', authenticate, lessonRoutes)
app.use('/api/progress', authenticate, progressRoutes)
app.use('/api/tutoring', authenticate, tutoringRoutes)
app.use('/api/payments', authenticate, paymentRoutes)

// Error handling
app.use(errorHandler)

// Start server
const startServer = async () => {
  await connectDB()
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
    console.log(`📍 API available at http://localhost:${PORT}/api`)
  })
}

startServer()

export default app
