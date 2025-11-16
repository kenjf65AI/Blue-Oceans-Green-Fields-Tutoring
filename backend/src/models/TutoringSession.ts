import mongoose, { Document, Schema } from 'mongoose'

export interface ITutoringSession extends Document {
  student: mongoose.Types.ObjectId
  tutor: mongoose.Types.ObjectId
  scheduledDate: Date
  duration: number // minutes
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show'
  topic: string
  notes?: string
  studentFeedback?: {
    rating: number
    comment: string
  }
  tutorNotes?: string
  meetingLink?: string
  price: number
  paid: boolean
  createdAt: Date
  updatedAt: Date
}

const TutoringSessionSchema: Schema = new Schema(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    tutor: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    scheduledDate: {
      type: Date,
      required: true
    },
    duration: {
      type: Number,
      default: 60
    },
    status: {
      type: String,
      enum: ['scheduled', 'completed', 'cancelled', 'no-show'],
      default: 'scheduled'
    },
    topic: {
      type: String,
      required: true
    },
    notes: String,
    studentFeedback: {
      rating: {
        type: Number,
        min: 1,
        max: 5
      },
      comment: String
    },
    tutorNotes: String,
    meetingLink: String,
    price: {
      type: Number,
      required: true
    },
    paid: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<ITutoringSession>('TutoringSession', TutoringSessionSchema)
