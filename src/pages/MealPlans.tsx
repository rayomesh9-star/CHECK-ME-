import { useState } from 'react'
import { mealPlans } from '../data/mealPlans'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TiltCard from '../components/motion/TiltCard'

export default function MealPlans() {
  const [filter, setFilter] = useState('All')
  const cats = ['All', 'Weight Loss', 'Muscle Gain', 'Balanced', 'Keto', 'Vegan']
  const list = filter === 'All' ? mealPlans : mealPlans.filter((m) => m.category === filter)

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-charcoal/60">Nutrition</div>
          <h1 className="mt-4 text-4xl font-display md:text-6xl">Meal Plans</h1>
        </div>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {cats.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={'rounded-full px-6 py-2 text-sm uppercase tracking-[0.2em] ' + (filter === c ? 'bg-lime' : 'bg-white')}>{c}</button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((plan, i) => (
            <TiltCard key={plan.id}>
              <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-3xl bg-white p-8 shadow-xl">
                <div className="mb-4 text-sm uppercase tracking-[0.3em] text-charcoal/60">{plan.category}</div>
                <div className="text-2xl font-display">{plan.name}</div>
                <p className="mt-2 text-sm text-charcoal/70">{plan.desc}</p>
                <div className="mt-4 flex gap-4 text-xs uppercase tracking-widest text-charcoal/60">
                  <span>{plan.calories} cals</span>
                  <span>P{plan.protein}g</span>
                  <span>F{plan.fat}g</span>
                  <span>C{plan.carbs}g</span>
                </div>
                <Link to={'/mealplans/' + plan.id} className="mt-6 inline-block text-sm uppercase tracking-[0.2em] underline">View plan</Link>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </main>
  )
}
