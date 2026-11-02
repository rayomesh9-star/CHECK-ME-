import { programs } from '../data/programs'
import { Link } from 'react-router-dom'
import TiltCard from '../components/motion/TiltCard'

export default function Fitness() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-charcoal/60">Training</div>
          <h1 className="mt-4 text-4xl font-display md:text-6xl">Fitness Programs</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <TiltCard key={p.id}>
              <div className="rounded-3xl bg-white p-8 shadow-xl">
                <div className="mb-4 text-sm uppercase tracking-[0.3em] text-charcoal/60">{p.level}</div>
                <div className="text-2xl font-display">{p.name}</div>
                <p className="mt-2 text-sm text-charcoal/70">{p.desc}</p>
                <div className="mt-4 text-xs uppercase tracking-widest text-charcoal/60">{p.days} days/week</div>
                <Link to={'/fitness/' + p.id} className="mt-6 inline-block text-sm uppercase tracking-[0.2em] underline">View program</Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </main>
  )
}
