import { useUserStore } from '../store/useUserStore'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Results() {
  const { profile } = useUserStore()

  if (!profile) {
    return (
      <main className="min-h-screen bg-cream pt-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-display">No results yet</h1>
          <div className="mt-6">
            <Link to="/quiz"><Button>Take the Check-Up</Button></Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-charcoal/60">Your Results</div>
          <h1 className="mt-4 text-4xl font-display md:text-6xl">Your personalized plan</h1>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[{ label: 'BMI', value: profile.bmi?.toFixed(1) }, { label: 'BMR', value: Math.round(profile.bmr) }, { label: 'TDEE', value: Math.round(profile.tdee) }, { label: 'Calories', value: profile.cals }].map((m, i) => (
            <motion.div key={m.label} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} className="rounded-3xl bg-white p-8 text-center shadow-xl">
              <div className="text-3xl font-display">{m.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.3em] text-charcoal/60">{m.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-4 text-sm uppercase tracking-[0.3em]">Macros</div>
            <div className="space-y-2">
              <div>Protein: {profile.macros?.protein}g</div>
              <div>Fat: {profile.macros?.fat}g</div>
              <div>Carbs: {profile.macros?.carbs}g</div>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-4 text-sm uppercase tracking-[0.3em]">Recommendation</div>
            <div className="space-y-2">
              <div>Meal Plan: {profile.rec?.plan}</div>
              <div>Program: {profile.rec?.program}</div>
              <div>Supplements: {profile.rec?.supp}</div>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-4 text-sm uppercase tracking-[0.3em]">Timeline</div>
            <div>Projected goal date: {profile.proj || 'N/A'}</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/tracker"><Button>Start my journey</Button></Link>
        </div>
      </div>
    </main>
  )
}
