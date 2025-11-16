import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  name: string
  skillLevel: number
  subscription: 'free' | 'self-paced' | 'premium'
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  initAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // TODO: Implement actual API call
        const mockUser = {
          id: '1',
          email,
          name: 'John Doe',
          skillLevel: 42,
          subscription: 'premium' as const
        }
        set({ user: mockUser, token: 'mock-token', isAuthenticated: true })
      },
      logout: () => {
        set({ user: null, token: null, isAuthenticated: false })
      },
      initAuth: () => {
        // Check if token exists in localStorage
        // TODO: Validate token with backend
      }
    }),
    {
      name: 'auth-storage'
    }
  )
)

interface LearningProgress {
  currentModule: string
  completedLessons: string[]
  skillScores: Record<string, number>
  totalTimeSpent: number
  lastActivityDate: string
}

interface LearningState {
  progress: LearningProgress
  updateProgress: (lessonId: string, score: number) => void
  calculateNextLesson: () => string
  getSkillLevel: (skill: string) => number
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set, get) => ({
      progress: {
        currentModule: 'email-automation',
        completedLessons: [],
        skillScores: {},
        totalTimeSpent: 0,
        lastActivityDate: new Date().toISOString()
      },
      updateProgress: (lessonId: string, score: number) => {
        set((state) => ({
          progress: {
            ...state.progress,
            completedLessons: [...state.progress.completedLessons, lessonId],
            skillScores: {
              ...state.progress.skillScores,
              [lessonId]: score
            },
            lastActivityDate: new Date().toISOString()
          }
        }))
      },
      calculateNextLesson: () => {
        // Adaptive learning logic
        const { progress } = get()
        const avgScore = Object.values(progress.skillScores).reduce((a, b) => a + b, 0) /
                        Object.values(progress.skillScores).length || 0

        // Recommend easier lessons if struggling
        if (avgScore < 60) {
          return 'beginner-reinforcement'
        }
        // Recommend advanced lessons if excelling
        if (avgScore > 85) {
          return 'advanced-challenge'
        }
        return 'intermediate-next'
      },
      getSkillLevel: (skill: string) => {
        const { progress } = get()
        return progress.skillScores[skill] || 0
      }
    }),
    {
      name: 'learning-storage'
    }
  )
)
