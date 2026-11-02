import { useParams, Link } from 'react-router-dom'
import { mealPlans } from '../data/mealPlans'
import Button from '../components/ui/Button'

export default function MealPlanDetail() {
  const { id } = useParams()
  const plan = mealPlans.find((m) => m.id === id)

  if (!plan) return <div className="min-h-screen pt-32 px-6">Not found</div>

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-sm uppercase tracking-[0.3em] text-charcoal/60">{plan.category}</div>
        <h1 className="mt-4 text-4xl font-display md:text-6xl">{plan.name}</h1>
        <p className="mt-4 text-charcoal/70">{plan.desc}</p>
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-4 text-sm uppercase tracking-[0.3em]">Macros</div>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div><div className="text-2xl font-display">{plan.calories}</div><div className="text-xs uppercase tracking-widest">Cals</div></div>
            <div><div className="text-2xl font-display">{plan.protein}g</div><div className="text-xs uppercase tracking-widest">Protein</div></div>
            <div><div className="text-2xl font-display">{plan.fat}g</div><div className="text-xs uppercase tracking-widest">Fat</div></div>
            <div><div className="text-2xl font-display">{plan.carbs}g</div><div className="text-xs uppercase tracking-widest">Carbs</div></div>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <Link to="/tracker"><Button>Add to tracker</Button></Link>
          <Link to="/mealplans"><Button variant="outline">Back</Button></Link>
        </div>
      </div>
    </main>
  )
}
