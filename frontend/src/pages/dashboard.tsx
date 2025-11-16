import { useState, useEffect } from 'react'
import {
  BookOpen,
  Calendar,
  TrendingUp,
  Target,
  Clock,
  Award,
  ChevronRight
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface UserProgress {
  skillLevel: number
  lessonsCompleted: number
  totalLessons: number
  streakDays: number
  timeSaved: number
  currentModule: string
}

export default function Dashboard() {
  const [progress, setProgress] = useState<UserProgress>({
    skillLevel: 42,
    lessonsCompleted: 12,
    totalLessons: 50,
    streakDays: 7,
    timeSaved: 23.5,
    currentModule: 'Email Automation Mastery'
  })

  // Mock data for progress chart
  const progressData = [
    { week: 'Week 1', score: 20 },
    { week: 'Week 2', score: 35 },
    { week: 'Week 3', score: 42 },
    { week: 'Week 4', score: 55 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">My Learning Dashboard</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Target className="w-8 h-8 text-primary-600" />}
            label="Skill Level"
            value={`${progress.skillLevel}%`}
            subtitle="Intermediate"
          />
          <StatCard
            icon={<BookOpen className="w-8 h-8 text-green-600" />}
            label="Lessons Completed"
            value={`${progress.lessonsCompleted}/${progress.totalLessons}`}
            subtitle="24% complete"
          />
          <StatCard
            icon={<Clock className="w-8 h-8 text-orange-600" />}
            label="Time Saved"
            value={`${progress.timeSaved}h`}
            subtitle="This month"
          />
          <StatCard
            icon={<Award className="w-8 h-8 text-purple-600" />}
            label="Streak"
            value={`${progress.streakDays} days`}
            subtitle="Keep it up!"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Progress Chart */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#1890ff"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Current Module */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
              <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-lg">{progress.currentModule}</h3>
                  <p className="text-gray-600">Lesson 4: Advanced Filtering Techniques</p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: '65%' }}
                    />
                  </div>
                </div>
                <button className="btn-primary">
                  Continue
                </button>
              </div>
            </div>

            {/* Recommended Lessons */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
              <div className="space-y-3">
                <LessonCard
                  title="AI-Powered Data Analysis"
                  difficulty="Intermediate"
                  duration="45 min"
                  completed={false}
                />
                <LessonCard
                  title="Automating Meeting Notes"
                  difficulty="Beginner"
                  duration="30 min"
                  completed={false}
                />
                <LessonCard
                  title="Content Creation with AI"
                  difficulty="Advanced"
                  duration="60 min"
                  completed={false}
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
              <div className="space-y-3">
                <SessionCard
                  title="1:1 Tutoring"
                  tutor="Sarah Johnson"
                  date="Tomorrow, 2:00 PM"
                />
                <button className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary-600 hover:text-primary-600 transition">
                  + Book New Session
                </button>
              </div>
            </div>

            {/* Achievements */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
              <div className="space-y-3">
                <AchievementBadge
                  title="Week Warrior"
                  description="7 day learning streak"
                  icon="🔥"
                />
                <AchievementBadge
                  title="Quick Learner"
                  description="Completed 10 lessons"
                  icon="⚡"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition flex items-center justify-between">
                  <span>Practice Simulation</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition flex items-center justify-between">
                  <span>Take Assessment</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition flex items-center justify-between">
                  <span>Browse All Courses</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper Components
function StatCard({ icon, label, value, subtitle }: {
  icon: React.ReactNode
  label: string
  value: string
  subtitle: string
}) {
  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <span className="text-gray-600 text-sm">{label}</span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
    </div>
  )
}

function LessonCard({ title, difficulty, duration, completed }: {
  title: string
  difficulty: string
  duration: string
  completed: boolean
}) {
  return (
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-primary-600 transition">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">
          {difficulty} • {duration}
        </p>
      </div>
      <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
        Start
      </button>
    </div>
  )
}

function SessionCard({ title, tutor, date }: {
  title: string
  tutor: string
  date: string
}) {
  return (
    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
      <div className="flex items-center gap-2 mb-1">
        <Calendar className="w-4 h-4 text-green-600" />
        <span className="font-semibold">{title}</span>
      </div>
      <p className="text-sm text-gray-600">with {tutor}</p>
      <p className="text-sm text-green-600 font-medium">{date}</p>
    </div>
  )
}

function AchievementBadge({ title, description, icon }: {
  title: string
  description: string
  icon: string
}) {
  return (
    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
      <span className="text-3xl">{icon}</span>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
