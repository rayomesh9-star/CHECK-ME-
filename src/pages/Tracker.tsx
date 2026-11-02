import { useTrackerStore } from '../store/useTrackerStore'
import WeightChart from '../components/tracker/WeightChart'
import WeighInForm from '../components/tracker/WeighInForm'
import WaterTracker from '../components/tracker/WaterTracker'
import HabitHeatmap from '../components/tracker/HabitHeatmap'
import { useUserStore } from '../store/useUserStore'

export default function Tracker() {
  const { weighIns } = useTrackerStore()
  const { profile } = useUserStore()
  const data = weighIns.map((w: any) => ({ date: w.date, weight: w.weight }))

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.3em] text-charcoal/60">Tracker</div>
          <h1 className="mt-4 text-4xl font-display md:text-6xl">Your dashboard</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-6 text-sm uppercase tracking-[0.3em]">Weight Trend</div>
            <WeightChart data={data.length ? data : [{ date: 'Today', weight: profile?.weightKg || 70 }]} />
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-6 text-sm uppercase tracking-[0.3em]">Weigh-in</div>
            <WeighInForm />
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-6 text-sm uppercase tracking-[0.3em]">Water</div>
            <WaterTracker />
          </div>
          <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-6 text-sm uppercase tracking-[0.3em]">Habits</div>
            <HabitHeatmap />
          </div>
        </div>
      </div>
    </main>
  )
}
