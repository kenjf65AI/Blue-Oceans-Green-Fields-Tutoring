import mongoose, { Document, Schema } from 'mongoose'

export interface ILesson extends Document {
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: string
  estimatedDuration: number // minutes
  prerequisites: string[]
  learningObjectives: string[]
  content: {
    type: 'video' | 'text' | 'interactive' | 'simulation'
    url?: string
    markdown?: string
    exercises?: any[]
  }[]
  aiPrompts: {
    introduction: string
    guidance: string[]
    feedback: string[]
  }
  published: boolean
  createdAt: Date
  updatedAt: Date
}

const LessonSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true
    },
    category: {
      type: String,
      required: true
    },
    estimatedDuration: {
      type: Number,
      required: true
    },
    prerequisites: [String],
    learningObjectives: [String],
    content: [
      {
        type: {
          type: String,
          enum: ['video', 'text', 'interactive', 'simulation']
        },
        url: String,
        markdown: String,
        exercises: [Schema.Types.Mixed]
      }
    ],
    aiPrompts: {
      introduction: String,
      guidance: [String],
      feedback: [String]
    },
    published: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<ILesson>('Lesson', LessonSchema)
