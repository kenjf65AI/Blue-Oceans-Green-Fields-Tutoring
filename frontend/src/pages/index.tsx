import Head from 'next/head'
import { useState } from 'react'
import {
  Sparkles,
  Brain,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement signup logic
    console.log('Signing up with:', email)
  }

  return (
    <>
      <Head>
        <title>Blue Oceans & Green Fields - AI Productivity Tutor</title>
        <meta
          name="description"
          content="Master real-world AI productivity skills with personalized tutoring and adaptive learning"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/WavesBKGD.png)',
            backgroundSize: '150%',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
            opacity: 0.6,
            zIndex: 0
          }}
        />
        <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-2xl font-bold text-primary-600">
              <Sparkles className="w-8 h-8" />
              <span>Blue Oceans & Green Fields</span>
              <img
                src="/images/sea-logo.png"
                alt="Blue Ocean"
                width="32"
                height="32"
                className="ml-2"
              />
              <img
                src="/images/fields-logo.png"
                alt="Green Fields"
                width="32"
                height="32"
                className="ml-1"
              />
            </div>
            <div className="flex gap-4">
              <Link href="/login" className="px-4 py-2 text-primary-600 hover:text-primary-700">
                Login
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Master AI Productivity
            <span className="block text-primary-600 mt-2">Save Hours Every Week</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn practical AI skills through personalized tutoring, adaptive lessons,
            and real-world simulations. From email automation to data analysis.
          </p>

          <form onSubmit={handleSignup} className="flex gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition flex items-center gap-2"
            >
              Start Free <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="text-sm text-gray-500">
            🎁 Holiday Special: First month $19 (regular $29) • 1:1 Tutoring from $50/hr
          </p>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Tutor?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-12 h-12 text-primary-600" />}
              title="Adaptive Learning"
              description="AI-powered curriculum that adjusts to your skill level and learning pace. Start from basics or dive into advanced techniques."
            />
            <FeatureCard
              icon={<Target className="w-12 h-12 text-primary-600" />}
              title="Real-World Tasks"
              description="Practice on actual productivity challenges: email automation, data analysis, content creation, and workflow optimization."
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-primary-600" />}
              title="Expert Mentorship"
              description="Book 1:1 sessions with AI productivity experts. Get personalized guidance for your specific use cases."
            />
            <FeatureCard
              icon={<TrendingUp className="w-12 h-12 text-primary-600" />}
              title="Track Progress"
              description="Visual dashboards showing your skill development, time saved, and mastery across different AI tools."
            />
            <FeatureCard
              icon={<Sparkles className="w-12 h-12 text-primary-600" />}
              title="Interactive Simulations"
              description="Hands-on practice environments where you solve real problems with AI assistance and immediate feedback."
            />
            <FeatureCard
              icon={<Calendar className="w-12 h-12 text-primary-600" />}
              title="Flexible Schedule"
              description="Learn at your own pace with 24/7 access to lessons. Schedule tutoring sessions that fit your calendar."
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-6 py-16 bg-white rounded-2xl shadow-lg my-16">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              name="Self-Paced"
              price="$19"
              period="/month"
              description="Perfect for independent learners"
              features={[
                'Access all lessons & simulations',
                'Adaptive learning paths',
                'Progress tracking dashboard',
                'Community forum access',
                'Email support'
              ]}
              highlighted={false}
              badge="HOLIDAY SPECIAL"
            />
            <PricingCard
              name="Premium"
              price="$29"
              period="/month"
              description="Best value for serious learners"
              features={[
                'Everything in Self-Paced',
                'Priority support',
                'Advanced AI workflows',
                'Certification programs',
                '10% off tutoring sessions'
              ]}
              highlighted={true}
            />
            <PricingCard
              name="1:1 Tutoring"
              price="$50"
              period="/hour"
              description="Personalized expert guidance"
              features={[
                'Dedicated AI productivity expert',
                'Custom learning plan',
                'Screen-sharing sessions',
                'Homework review',
                'Flexible scheduling'
              ]}
              highlighted={false}
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              🎄 Holiday Bundle: Gift 3 months + 2 tutoring hours for $99 (save $75!)
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="I'm saving 10 hours a week on email and reporting. This paid for itself in the first month!"
              author="Sarah Chen"
              role="Marketing Manager"
            />
            <TestimonialCard
              quote="The 1:1 tutoring helped me automate our entire client onboarding process. Game changer."
              author="Marcus Rodriguez"
              role="Operations Director"
            />
            <TestimonialCard
              quote="Finally, AI training that's actually practical. I use what I learn immediately at work."
              author="Jennifer Park"
              role="Product Designer"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem
              question="Do I need prior AI experience?"
              answer="No! We start from the basics and adapt to your level. Whether you're new to AI or looking to level up, our curriculum adjusts to you."
            />
            <FAQItem
              question="What AI tools will I learn?"
              answer="You'll learn ChatGPT, Claude, Midjourney, automation tools, and more. We focus on practical productivity applications, not theory."
            />
            <FAQItem
              question="How does the tutoring work?"
              answer="Book sessions directly through the platform. Sessions are via video call with screen sharing. Tutors are vetted AI productivity experts."
            />
            <FAQItem
              question="Can I cancel anytime?"
              answer="Yes! Monthly subscriptions can be cancelled anytime. No long-term commitments required."
            />
            <FAQItem
              question="Is there a money-back guarantee?"
              answer="Absolutely. If you're not satisfied within the first 7 days, we'll refund you 100%, no questions asked."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-green-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to 10x Your Productivity?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of professionals saving hours every week with AI
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
            >
              Start Your Free Trial
            </Link>
            <p className="mt-4 text-sm opacity-75">No credit card required</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 border-t border-gray-200">
          <div className="text-center text-gray-600">
            <p>© 2025 Blue Oceans & Green Fields. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
              <Link href="/privacy" className="hover:text-primary-600">Privacy</Link>
              <Link href="/terms" className="hover:text-primary-600">Terms</Link>
              <Link href="/contact" className="hover:text-primary-600">Contact</Link>
            </div>
          </div>
        </footer>
        </div>
      </main>
    </>
  )
}

// Helper Components
function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted,
  badge
}: {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted: boolean
  badge?: string
}) {
  return (
    <div className={`p-8 rounded-xl ${highlighted ? 'bg-primary-600 text-white ring-4 ring-primary-300' : 'bg-gray-50'}`}>
      {badge && (
        <span className="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full mb-4">
          {badge}
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className={`mb-4 ${highlighted ? 'text-primary-100' : 'text-gray-600'}`}>{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className={highlighted ? 'text-primary-100' : 'text-gray-600'}>{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? 'text-white' : 'text-primary-600'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/signup"
        className={`block w-full py-3 rounded-lg text-center font-semibold transition ${
          highlighted
            ? 'bg-white text-primary-600 hover:bg-gray-100'
            : 'bg-primary-600 text-white hover:bg-primary-700'
        }`}
      >
        Get Started
      </Link>
    </div>
  )
}

function TestimonialCard({ quote, author, role }: {
  quote: string
  author: string
  role: string
}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <p className="text-gray-600 mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}
