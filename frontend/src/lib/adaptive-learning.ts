/**
 * Adaptive Learning Engine
 *
 * This module implements the core adaptive learning logic that personalizes
 * the learning experience based on user performance, engagement, and goals.
 */

export interface StudentModel {
  userId: string
  skillLevels: Record<string, number> // skill -> proficiency (0-100)
  learningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'reading'
  pace: 'slow' | 'moderate' | 'fast'
  strugglingAreas: string[]
  strengths: string[]
  totalLearningTime: number
  engagementScore: number // 0-100
  lastAssessmentDate: string
}

export interface LessonRecommendation {
  lessonId: string
  title: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedDuration: number // minutes
  relevanceScore: number // 0-100, how relevant to current needs
  prerequisites: string[]
  learningObjectives: string[]
}

/**
 * Adaptive Learning Algorithm
 *
 * Pseudocode:
 *
 * function recommendNextLesson(studentModel):
 *   1. Assess current skill level across all domains
 *   2. Identify knowledge gaps and struggling areas
 *   3. Calculate optimal difficulty level (zone of proximal development)
 *   4. Filter lessons by prerequisites
 *   5. Rank by:
 *      - Relevance to weak areas (40% weight)
 *      - Appropriate difficulty (30% weight)
 *      - Learning style match (20% weight)
 *      - Engagement prediction (10% weight)
 *   6. Return top 3-5 recommendations
 */
export class AdaptiveLearningEngine {
  private studentModel: StudentModel

  constructor(studentModel: StudentModel) {
    this.studentModel = studentModel
  }

  /**
   * Calculate the optimal difficulty for the next lesson
   * Uses Vygotsky's Zone of Proximal Development concept
   */
  getOptimalDifficulty(): number {
    const avgSkillLevel = this.getAverageSkillLevel()

    // Target difficulty should be slightly above current level
    // to challenge but not frustrate
    const optimalDifficulty = Math.min(avgSkillLevel + 15, 100)

    // Adjust based on recent performance
    if (this.studentModel.strugglingAreas.length > 3) {
      return optimalDifficulty - 10 // Make it easier
    }

    if (this.studentModel.engagementScore > 80) {
      return optimalDifficulty + 5 // Can handle more challenge
    }

    return optimalDifficulty
  }

  /**
   * Recommend next lessons using adaptive algorithm
   */
  recommendNextLessons(
    availableLessons: LessonRecommendation[],
    count: number = 5
  ): LessonRecommendation[] {
    const optimalDifficulty = this.getOptimalDifficulty()

    // Score each lesson
    const scoredLessons = availableLessons.map(lesson => {
      const score = this.calculateLessonScore(lesson, optimalDifficulty)
      return { ...lesson, relevanceScore: score }
    })

    // Filter out lessons where prerequisites aren't met
    const eligibleLessons = scoredLessons.filter(lesson =>
      this.hasPrerequisites(lesson.prerequisites)
    )

    // Sort by relevance score and return top N
    return eligibleLessons
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, count)
  }

  /**
   * Calculate relevance score for a lesson
   */
  private calculateLessonScore(
    lesson: LessonRecommendation,
    optimalDifficulty: number
  ): number {
    const difficultyScore = this.getDifficultyScore(lesson, optimalDifficulty)
    const relevanceScore = this.getRelevanceScore(lesson)
    const engagementScore = this.getEngagementScore(lesson)

    // Weighted combination
    return (
      difficultyScore * 0.3 +
      relevanceScore * 0.4 +
      engagementScore * 0.3
    )
  }

  /**
   * Score lesson difficulty match
   */
  private getDifficultyScore(
    lesson: LessonRecommendation,
    optimalDifficulty: number
  ): number {
    const difficultyMap = {
      beginner: 30,
      intermediate: 60,
      advanced: 90
    }

    const lessonDifficulty = difficultyMap[lesson.difficulty]
    const diff = Math.abs(lessonDifficulty - optimalDifficulty)

    // Score decreases as difference increases
    return Math.max(0, 100 - diff * 2)
  }

  /**
   * Score lesson relevance to student's weak areas
   */
  private getRelevanceScore(lesson: LessonRecommendation): number {
    let score = 50 // Base score

    // Boost score if lesson addresses struggling areas
    const addressesWeakness = lesson.learningObjectives.some(objective =>
      this.studentModel.strugglingAreas.some(area =>
        objective.toLowerCase().includes(area.toLowerCase())
      )
    )

    if (addressesWeakness) {
      score += 30
    }

    // Slight boost for building on strengths
    const buildsOnStrength = lesson.prerequisites.some(prereq =>
      this.studentModel.strengths.includes(prereq)
    )

    if (buildsOnStrength) {
      score += 20
    }

    return Math.min(score, 100)
  }

  /**
   * Predict engagement score based on learning style and duration
   */
  private getEngagementScore(lesson: LessonRecommendation): number {
    let score = 70 // Base score

    // Adjust based on lesson duration vs. typical attention span
    const idealDuration = this.studentModel.pace === 'fast' ? 30 : 45
    const durationDiff = Math.abs(lesson.estimatedDuration - idealDuration)
    score -= durationDiff * 0.5

    return Math.max(0, Math.min(score, 100))
  }

  /**
   * Check if student has completed prerequisites
   */
  private hasPrerequisites(prerequisites: string[]): boolean {
    return prerequisites.every(prereq =>
      this.studentModel.skillLevels[prereq] >= 60
    )
  }

  /**
   * Get average skill level across all domains
   */
  private getAverageSkillLevel(): number {
    const skills = Object.values(this.studentModel.skillLevels)
    if (skills.length === 0) return 0
    return skills.reduce((a, b) => a + b, 0) / skills.length
  }

  /**
   * Update student model after lesson completion
   */
  updateStudentModel(
    lessonId: string,
    score: number,
    timeSpent: number,
    feedback: {
      difficulty: 'too-easy' | 'just-right' | 'too-hard'
      engagement: number // 1-5
    }
  ): void {
    // Update skill levels
    this.studentModel.skillLevels[lessonId] = score

    // Update total learning time
    this.studentModel.totalLearningTime += timeSpent

    // Update pace based on feedback
    if (feedback.difficulty === 'too-easy' && this.studentModel.pace !== 'fast') {
      this.studentModel.pace = 'moderate'
    } else if (feedback.difficulty === 'too-hard' && this.studentModel.pace !== 'slow') {
      this.studentModel.pace = 'moderate'
    }

    // Update struggling areas
    if (score < 60) {
      if (!this.studentModel.strugglingAreas.includes(lessonId)) {
        this.studentModel.strugglingAreas.push(lessonId)
      }
    } else if (score > 80) {
      // Remove from struggling areas if improved
      this.studentModel.strugglingAreas = this.studentModel.strugglingAreas.filter(
        area => area !== lessonId
      )
      // Add to strengths
      if (!this.studentModel.strengths.includes(lessonId)) {
        this.studentModel.strengths.push(lessonId)
      }
    }

    // Update engagement score (exponential moving average)
    const engagementValue = feedback.engagement * 20 // Convert 1-5 to 0-100
    this.studentModel.engagementScore =
      0.7 * this.studentModel.engagementScore + 0.3 * engagementValue

    // Update last assessment date
    this.studentModel.lastAssessmentDate = new Date().toISOString()
  }

  /**
   * Generate real-time feedback during lesson
   */
  generateRealtimeFeedback(
    questionAnswered: boolean,
    isCorrect: boolean,
    timeToAnswer: number
  ): string {
    if (!questionAnswered) {
      return "Take your time. Review the material if needed."
    }

    if (isCorrect) {
      if (timeToAnswer < 5) {
        return "Excellent! You've mastered this concept."
      }
      return "Great job! You're making good progress."
    } else {
      return "Not quite. Let's review this concept with a different example."
    }
  }

  /**
   * Calculate estimated time to mastery for a skill
   */
  estimateTimeToMastery(skill: string, targetLevel: number = 80): number {
    const currentLevel = this.studentModel.skillLevels[skill] || 0
    const gap = targetLevel - currentLevel

    if (gap <= 0) return 0

    // Estimate based on learning pace and current engagement
    const baseHoursPerPoint = this.studentModel.pace === 'fast' ? 0.5 :
                              this.studentModel.pace === 'moderate' ? 0.75 : 1.0

    const engagementMultiplier = this.studentModel.engagementScore / 100
    const adjustedRate = baseHoursPerPoint / Math.max(engagementMultiplier, 0.5)

    return Math.ceil(gap * adjustedRate)
  }
}

/**
 * Example usage:
 *
 * const studentModel: StudentModel = {
 *   userId: '123',
 *   skillLevels: {
 *     'email-automation': 45,
 *     'data-analysis': 30,
 *     'content-creation': 60
 *   },
 *   learningStyle: 'visual',
 *   pace: 'moderate',
 *   strugglingAreas: ['data-analysis'],
 *   strengths: ['content-creation'],
 *   totalLearningTime: 120,
 *   engagementScore: 75,
 *   lastAssessmentDate: '2025-01-15'
 * }
 *
 * const engine = new AdaptiveLearningEngine(studentModel)
 * const recommendations = engine.recommendNextLessons(availableLessons, 5)
 */
