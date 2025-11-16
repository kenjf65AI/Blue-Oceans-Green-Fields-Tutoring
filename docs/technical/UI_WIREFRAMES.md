# UI Wireframes & User Flows

## Design Principles

1. **Mobile-First:** 60%+ of users access on mobile
2. **Clarity:** Clear calls-to-action, minimal cognitive load
3. **Progress Visible:** Always show advancement and achievements
4. **Quick Wins:** Users see value in <5 minutes

---

## Screen Layouts

### 1. Landing Page

```
┌─────────────────────────────────────────────────────┐
│  [Logo] Blue Oceans & Green Fields    [Login] [Signup] │
├─────────────────────────────────────────────────────┤
│                                                       │
│         Master AI Productivity                        │
│         Save Hours Every Week                         │
│                                                       │
│    Learn practical AI skills through personalized     │
│         tutoring and adaptive lessons                 │
│                                                       │
│    [Email Input Field]  [Start Free Trial →]         │
│                                                       │
│    🎁 First month $19 • 1:1 Tutoring from $50/hr     │
│                                                       │
├─────────────────────────────────────────────────────┤
│                                                       │
│              Why Choose Our AI Tutor?                 │
│                                                       │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐             │
│   │  🧠     │  │  🎯     │  │  👥     │             │
│   │Adaptive │  │ Real-   │  │ Expert  │             │
│   │Learning │  │ World   │  │Mentors  │             │
│   │         │  │ Tasks   │  │         │             │
│   └─────────┘  └─────────┘  └─────────┘             │
│                                                       │
│   [3 more feature cards...]                           │
│                                                       │
├─────────────────────────────────────────────────────┤
│                                                       │
│        Simple, Transparent Pricing                    │
│                                                       │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│   │Self-Paced│ │ Premium  │ │1:1 Tutor │            │
│   │  $19/mo  │ │  $29/mo  │ │ $50/hr   │            │
│   │          │ │[POPULAR] │ │          │            │
│   │✓ Lessons │ │✓ All +   │ │✓ Personal│            │
│   │✓ Adaptive│ │✓ Priority│ │✓ Custom  │            │
│   │✓ Tracking│ │✓ Advanced│ │✓ Screen  │            │
│   │          │ │✓ 10% off │ │  sharing │            │
│   │[Start]   │ │[Start]   │ │[Book]    │            │
│   └──────────┘ └──────────┘ └──────────┘            │
│                                                       │
├─────────────────────────────────────────────────────┤
│           What Our Users Say                          │
│   [3 testimonial cards with quotes, names, roles]     │
├─────────────────────────────────────────────────────┤
│                FAQ Section                            │
│   [Expandable accordion with 5-6 common questions]    │
├─────────────────────────────────────────────────────┤
│      Ready to 10x Your Productivity?                  │
│              [Start Free Trial]                       │
├─────────────────────────────────────────────────────┤
│  © 2025 Blue Oceans & Green Fields                   │
│  [Privacy] [Terms] [Contact]                         │
└─────────────────────────────────────────────────────┘
```

**Mobile Responsive:**
- Stack all cards vertically
- Hamburger menu for navigation
- Sticky CTA button at bottom
- Simplified hero section (heading + email + button)

---

### 2. Dashboard (Main User Interface)

```
┌─────────────────────────────────────────────────────┐
│ [☰]  Dashboard              🔔[3]  [Profile Pic▼]   │
├───────────┬─────────────────────────────────────────┤
│           │  My Learning Dashboard                   │
│ Dashboard │                                          │
│ Lessons   │  ┌────────┐ ┌────────┐ ┌────────┐      │
│ Progress  │  │  🎯    │ │  📚    │ │  ⏱️    │      │
│ Tutoring  │  │ Skill  │ │Lessons │ │ Time   │      │
│ Community │  │  42%   │ │ 12/50  │ │ 23.5h  │      │
│ Settings  │  │Intermd │ │24% done│ │ saved  │      │
│           │  └────────┘ └────────┘ └────────┘      │
│           │  ┌────────┐                             │
│           │  │  🏆    │  7 days • Keep it up!       │
│           │  │ Streak │                             │
│           │  └────────┘                             │
│           │                                          │
│           │  ───────────────────────────────────    │
│           │                                          │
│           │  Continue Learning                       │
│           │  ┌─────────────────────────────────┐    │
│           │  │ Email Automation Mastery        │    │
│           │  │ Lesson 4: Advanced Filtering    │    │
│           │  │ ████████████░░░░░░░░░ 65%       │    │
│           │  │                    [Continue →] │    │
│           │  └─────────────────────────────────┘    │
│           │                                          │
│           │  Your Progress This Month               │
│           │  ┌─────────────────────────────────┐    │
│           │  │      [Line Chart]               │    │
│           │  │   Skill                         │    │
│           │  │   Level                         │    │
│           │  │     ↑                           │    │
│           │  │    /                            │    │
│           │  │   /                             │    │
│           │  │  /                              │    │
│           │  │ ────────────→ Time              │    │
│           │  └─────────────────────────────────┘    │
│           │                                          │
│           │  Recommended for You                    │
│           │  ┌─────────────────────────────────┐    │
│           │  │ 📊 AI Data Analysis              │    │
│           │  │ Intermediate • 45 min   [Start] │    │
│           │  ├─────────────────────────────────┤    │
│           │  │ 📝 Automating Meeting Notes      │    │
│           │  │ Beginner • 30 min       [Start] │    │
│           │  ├─────────────────────────────────┤    │
│           │  │ ✍️ Content Creation with AI      │    │
│           │  │ Advanced • 60 min       [Start] │    │
│           │  └─────────────────────────────────┘    │
│           │                                          │
└───────────┴─────────────────────────────────────────┘
```

**Key Interactions:**
- Click stat cards to drill into details
- Progress chart is interactive (hover for data points)
- "Continue" button resumes exactly where user left off
- Recommended lessons update based on performance

---

### 3. Lesson View

```
┌─────────────────────────────────────────────────────┐
│ [←Back]  Lesson 4: Advanced Filtering    [Progress] │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ Lesson Content Area                             │ │
│ │                                                 │ │
│ │ [Video Player / Interactive Simulation]         │ │
│ │                                                 │ │
│ │ OR                                              │ │
│ │                                                 │ │
│ │ [Rich Text Content with Images]                 │ │
│ │                                                 │ │
│ │ Key Concepts:                                   │ │
│ │ • Concept 1                                     │ │
│ │ • Concept 2                                     │ │
│ │ • Concept 3                                     │ │
│ │                                                 │ │
│ └─────────────────────────────────────────────────┘ │
│                                                     │
│ ┌─────────────────────────────────────────────────┐ │
│ │ 🎯 Practice Exercise                            │ │
│ │                                                 │ │
│ │ Task: Use this ChatGPT prompt to filter...      │ │
│ │                                                 │ │
│ │ ┌─────────────────────────────────────────────┐ │ │
│ │ │ [User Input Area]                           │ │ │
│ │ │                                             │ │ │
│ │ └─────────────────────────────────────────────┘ │ │
│ │                                                 │ │
│ │ [Check Answer]  [Get Hint]                      │ │
│ └─────────────────────────────────────────────────┘ │
│                                                     │
│ ┌─────────────────────────────────────────────────┐ │
│ │ ✅ Correct! Great work.                         │ │
│ │                                                 │ │
│ │ You've mastered the concept of...              │ │
│ │                                                 │ │
│ │ [Next Lesson →]  [Review]                       │ │
│ └─────────────────────────────────────────────────┘ │
│                                                     │
│ Lesson Progress: ████████████████░░ 80%             │
│                                                     │
│ [Previous Lesson]         [Mark Complete]          │
└─────────────────────────────────────────────────────┘
```

**Adaptive Feedback Logic:**
- Correct answer: Praise + explanation + move forward
- Incorrect answer: Gentle guidance + hint + try again
- 2nd incorrect: Detailed explanation + show answer
- Track time-to-complete for pacing adjustment

---

### 4. Interactive Simulation

```
┌─────────────────────────────────────────────────────┐
│  Simulation: Email Triage & Response                 │
│  ⏱️ Timer: 15:00  📊 Score: 0/100                   │
├─────────────────────────────────────────────────────┤
│                                                       │
│  Scenario:                                            │
│  You have 20 emails in your inbox. Use AI to:        │
│  1. Categorize by priority                            │
│  2. Draft responses for routine ones                  │
│  3. Flag ones that need personal attention            │
│                                                       │
│  ┌─────────────────────────────────────────────┐     │
│  │ Inbox (20 emails)                           │     │
│  │ ┌─────────────────────────────────────────┐ │     │
│  │ │ From: john@client.com                   │ │     │
│  │ │ Subject: Question about delivery        │ │     │
│  │ │ Preview: When can we expect...          │ │     │
│  │ └─────────────────────────────────────────┘ │     │
│  │ [... 19 more emails]                        │     │
│  └─────────────────────────────────────────────┘     │
│                                                       │
│  Your AI Workspace:                                   │
│  ┌─────────────────────────────────────────────┐     │
│  │ [Paste emails or upload file]              │     │
│  │                                             │     │
│  │ [Your AI Prompt:]                           │     │
│  │ ┌─────────────────────────────────────────┐ │     │
│  │ │                                         │ │     │
│  │ │ Type your prompt here...                │ │     │
│  │ │                                         │ │     │
│  │ └─────────────────────────────────────────┘ │     │
│  │                                             │     │
│  │ [Process with AI]  [Get Help]               │     │
│  └─────────────────────────────────────────────┘     │
│                                                       │
│  AI Response:                                         │
│  ┌─────────────────────────────────────────────┐     │
│  │ [AI output will appear here]                │     │
│  │                                             │     │
│  └─────────────────────────────────────────────┘     │
│                                                       │
│  [Submit Solution]  [Hint]  [Skip]                    │
│                                                       │
└─────────────────────────────────────────────────────┘
```

**Real-time Feedback:**
- Show accuracy score as user works
- Highlight best practices in green
- Flag inefficiencies in yellow
- Provide coaching tips in sidebar

---

### 5. Progress Tracking Page

```
┌─────────────────────────────────────────────────────┐
│  Your Progress                                        │
├─────────────────────────────────────────────────────┤
│                                                       │
│  Overall Skill Level: 42% (Intermediate)              │
│  ████████████████░░░░░░░░░░░░░                       │
│                                                       │
│  ┌────────────────────────────────────────────────┐  │
│  │ Skills Breakdown                               │  │
│  │                                                │  │
│  │ Email Automation        ████████░░ 80%         │  │
│  │ Data Analysis          ██████░░░░ 60%         │  │
│  │ Content Creation       ████████████ 95%        │  │
│  │ Workflow Optimization  ████░░░░░░ 40%         │  │
│  │ AI Tool Mastery        ██████████░ 85%        │  │
│  │                                                │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
│  ┌────────────────────────────────────────────────┐  │
│  │ Time Saved This Month: 23.5 hours             │  │
│  │                                                │  │
│  │ [Bar Chart by Week]                            │  │
│  │ Week 1: ████ 4h                               │  │
│  │ Week 2: ████████ 7h                           │  │
│  │ Week 3: ██████ 5.5h                           │  │
│  │ Week 4: ████████ 7h                           │  │
│  │                                                │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
│  ┌────────────────────────────────────────────────┐  │
│  │ Achievements Earned (8/20)                     │  │
│  │                                                │  │
│  │ 🔥 Week Warrior    ⚡ Quick Learner           │  │
│  │ 📚 Bookworm       🎯 Precision Pro           │  │
│  │ 🚀 Productivity    💡 Problem Solver          │  │
│  │    Master                                      │  │
│  │                                                │  │
│  │ [View All Achievements →]                      │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
│  Learning Streak: 7 days 🔥                          │
│  Longest Streak: 12 days                             │
│                                                       │
│  [Share Progress] [Download Report]                   │
│                                                       │
└─────────────────────────────────────────────────────┘
```

**Gamification Elements:**
- Progress bars with milestone markers
- Achievement badges unlock at intervals
- Streak counter with fire emoji
- Social sharing for motivation
- Downloadable PDF report for portfolio/resume

---

### 6. Tutoring Booking Flow

```
Step 1: Select Tutor
┌─────────────────────────────────────────────────────┐
│  Book 1:1 Tutoring Session                           │
├─────────────────────────────────────────────────────┤
│                                                       │
│  Choose Your Tutor:                                   │
│                                                       │
│  ┌─────────────────────────────────────────────┐     │
│  │ [Photo] Sarah Johnson                       │     │
│  │ ⭐⭐⭐⭐⭐ 4.9 (127 reviews)                  │     │
│  │                                             │     │
│  │ Specialties: Email automation, data         │     │
│  │ "Sarah helped me save 10hrs/week!"          │     │
│  │                                             │     │
│  │ $50/hr            [Select]                  │     │
│  └─────────────────────────────────────────────┘     │
│                                                       │
│  [2 more tutor cards...]                              │
│                                                       │
└─────────────────────────────────────────────────────┘

Step 2: Choose Date & Time
┌─────────────────────────────────────────────────────┐
│  Schedule Session with Sarah                          │
├─────────────────────────────────────────────────────┤
│                                                       │
│  ┌─────────────────┐  ┌─────────────────────────┐   │
│  │  [Calendar]     │  │ Available Times:        │   │
│  │                 │  │ ○ 2:00 PM              │   │
│  │  Jan 2025       │  │ ○ 3:00 PM              │   │
│  │  Su Mo Tu We... │  │ ○ 5:00 PM              │   │
│  │      1  2  3    │  │ ○ 6:00 PM              │   │
│  │   4  5 [6] 7    │  │                         │   │
│  │                 │  │ Duration: [60 min ▼]   │   │
│  └─────────────────┘  └─────────────────────────┘   │
│                                                       │
│  What do you want to focus on?                        │
│  ┌─────────────────────────────────────────────┐     │
│  │ Email automation for my specific workflow   │     │
│  │                                             │     │
│  └─────────────────────────────────────────────┘     │
│                                                       │
│  [Back]                         [Continue]            │
│                                                       │
└─────────────────────────────────────────────────────┘

Step 3: Confirm & Pay
┌─────────────────────────────────────────────────────┐
│  Confirm Your Session                                 │
├─────────────────────────────────────────────────────┤
│                                                       │
│  Session Details:                                     │
│  ┌─────────────────────────────────────────────┐     │
│  │ Tutor: Sarah Johnson                        │     │
│  │ Date: Jan 6, 2025                           │     │
│  │ Time: 2:00 PM EST                           │     │
│  │ Duration: 60 minutes                        │     │
│  │ Topic: Email automation                     │     │
│  │                                             │     │
│  │ Price: $50.00                               │     │
│  │ Discount (Premium): -$5.00                  │     │
│  │ Total: $45.00                               │     │
│  └─────────────────────────────────────────────┘     │
│                                                       │
│  Payment Method:                                      │
│  ○ Credit Card ending in 4242                        │
│  ○ Add New Card                                       │
│                                                       │
│  ☑ I agree to the cancellation policy                │
│                                                       │
│  [Back]         [Confirm & Pay $45]                   │
│                                                       │
└─────────────────────────────────────────────────────┘

Step 4: Confirmation
┌─────────────────────────────────────────────────────┐
│  ✅ Session Booked!                                   │
├─────────────────────────────────────────────────────┤
│                                                       │
│  Your session with Sarah is confirmed.                │
│                                                       │
│  📅 Jan 6, 2025 at 2:00 PM EST                       │
│  ⏱️ 60 minutes                                       │
│                                                       │
│  Next Steps:                                          │
│  ✓ Calendar invite sent to your email                │
│  ✓ Meeting link: [Zoom link]                         │
│  ✓ Prepare questions beforehand                       │
│                                                       │
│  [Add to Calendar] [View My Sessions]                 │
│                                                       │
└─────────────────────────────────────────────────────┘
```

**Key Features:**
- Tutor profiles with ratings & specialties
- Real-time availability calendar
- Automatic timezone detection
- Email confirmations & reminders
- 24-hour cancellation policy

---

## User Flows

### Flow 1: New User Onboarding

```
1. Landing Page
   ↓ [Click "Start Free Trial"]
2. Sign Up Form
   - Email
   - Password
   - Name
   ↓ [Submit]
3. Learning Style Assessment (3 questions)
   - "How do you learn best?" (Visual/Auditory/Hands-on)
   - "What's your current AI experience?" (None/Basic/Intermediate)
   - "Primary goal?" (Save time/Learn skills/Career growth)
   ↓ [Complete Assessment]
4. Personalized Welcome Screen
   - Shows recommended starting path
   - Highlights first lesson
   - Tour of dashboard (optional)
   ↓ [Start First Lesson]
5. First Lesson (Quick Win - 10 min)
   - Email automation basics
   - Immediate practical application
   - Success celebration
   ↓ [Complete Lesson]
6. Dashboard
   - Progress shown (1/50 lessons)
   - Unlock achievement badge
   - Recommend next steps
```

**Success Criteria:**
- 80% complete onboarding
- <10 minutes to first lesson completion
- 70% return within 48 hours

---

### Flow 2: Returning User Session

```
1. Login
   ↓
2. Dashboard
   - Shows "Continue Learning" card
   - Displays streak (motivational)
   - New recommendations based on recent progress
   ↓ [Click "Continue"]
3. Resume Last Lesson
   - Picks up exactly where left off
   - Quick recap of previous content
   ↓ [Complete Lesson]
4. Immediate Feedback & Next Steps
   - Score/time/comparison to peers
   - Skill level updated
   - Next lesson unlocked
   ↓ [Choose Action]
5. Options:
   a) Continue to next lesson
   b) Take a simulation
   c) Book tutoring session
   d) Explore other topics
```

---

### Flow 3: Booking & Attending Tutoring

```
1. Dashboard → "Book Session"
   ↓
2. Select Tutor
   - Browse profiles
   - Filter by specialty/price/rating
   - Read reviews
   ↓ [Choose Tutor]
3. Pick Date & Time
   - Calendar shows availability
   - Select duration (30/60/90 min)
   - Describe topic
   ↓ [Continue]
4. Payment
   - Review details
   - Apply discount if applicable
   - Enter payment info
   ↓ [Confirm]
5. Confirmation
   - Email sent
   - Calendar invite
   - Prep materials suggested
   ↓ [Day of Session]
6. Session Reminder (24h & 1h before)
   - Email reminder
   - Push notification
   - Link to join
   ↓ [Join Session]
7. Live Tutoring
   - Video call
   - Screen sharing
   - Real-time Q&A
   ↓ [Session Ends]
8. Post-Session
   - Rate experience
   - Receive session notes
   - Book follow-up (optional)
```

---

## Mobile App Considerations

### Bottom Navigation (5 tabs)
```
┌─────────────────────────────────────────────────────┐
│                                                       │
│           [Main Content Area]                         │
│                                                       │
│                                                       │
├─────────────────────────────────────────────────────┤
│  🏠      📚      ➕      📊      👤                  │
│ Home   Lessons  Start  Progress  Profile             │
└─────────────────────────────────────────────────────┘
```

### Key Mobile Optimizations
- Lessons broken into 5-minute chunks
- Offline mode for downloaded lessons
- Push notifications for streak reminders
- Swipe gestures for navigation
- Voice input for exercises
- Quick actions widget

---

## Accessibility Features

- High contrast mode
- Text size adjustment
- Screen reader compatible
- Keyboard navigation
- Captions for all videos
- Alternative text for images
- Color-blind friendly palette

---

## Design System

### Colors
- Primary: #1890ff (Blue)
- Secondary: #52c41a (Green)
- Success: #52c41a
- Warning: #faad14
- Error: #f5222d
- Neutral: Grays (#f5f5f5 to #262626)

### Typography
- Headings: Inter Bold
- Body: Inter Regular
- Code: Fira Code

### Components Library
- Buttons (Primary, Secondary, Ghost)
- Cards (Standard, Highlighted, Interactive)
- Input Fields (Text, Email, Password, Textarea)
- Progress Bars (Linear, Circular)
- Badges (Achievement, Status)
- Tooltips & Modals
- Notifications (Success, Error, Info)

---

All wireframes prioritize:
✓ Clear hierarchy
✓ Obvious CTAs
✓ Minimal clicks to value
✓ Responsive design
✓ Fast load times
✓ Delightful micro-interactions
