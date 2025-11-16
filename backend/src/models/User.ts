import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  email: string
  password: string
  name: string
  profile: {
    skillLevel: number
    learningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'reading'
    pace: 'slow' | 'moderate' | 'fast'
    goals: string[]
  }
  subscription: {
    plan: 'free' | 'self-paced' | 'premium'
    status: 'active' | 'cancelled' | 'expired'
    startDate: Date
    endDate?: Date
    stripeCustomerId?: string
    stripeSubscriptionId?: string
  }
  progress: {
    completedLessons: string[]
    skillScores: Map<string, number>
    totalLearningTime: number
    currentStreak: number
    longestStreak: number
    lastActivityDate: Date
  }
  createdAt: Date
  updatedAt: Date
}

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    profile: {
      skillLevel: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
      },
      learningStyle: {
        type: String,
        enum: ['visual', 'auditory', 'kinesthetic', 'reading'],
        default: 'visual'
      },
      pace: {
        type: String,
        enum: ['slow', 'moderate', 'fast'],
        default: 'moderate'
      },
      goals: [String]
    },
    subscription: {
      plan: {
        type: String,
        enum: ['free', 'self-paced', 'premium'],
        default: 'free'
      },
      status: {
        type: String,
        enum: ['active', 'cancelled', 'expired'],
        default: 'active'
      },
      startDate: {
        type: Date,
        default: Date.now
      },
      endDate: Date,
      stripeCustomerId: String,
      stripeSubscriptionId: String
    },
    progress: {
      completedLessons: [String],
      skillScores: {
        type: Map,
        of: Number
      },
      totalLearningTime: {
        type: Number,
        default: 0
      },
      currentStreak: {
        type: Number,
        default: 0
      },
      longestStreak: {
        type: Number,
        default: 0
      },
      lastActivityDate: {
        type: Date,
        default: Date.now
      }
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model<IUser>('User', UserSchema)
