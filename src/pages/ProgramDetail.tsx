import { useParams, Link } from 'react-router-dom'
import { programs } from '../data/programs'
import Button from '../components/ui/Button'

export default function ProgramDetail() {
  const { id } = useParams()
  const prog = programs.find((p) => p.id === id)

  if (!prog) return <div className="min-h-screen pt-32 px-6">Not found</div>

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-sm uppercase tracking-[0.3em] text-charcoal/60">{prog.level}</div>
        <h1 className="mt-4 text-4xl font-display md:text-6xl">{prog.name}</h1>
        <p className="mt-4 text-charcoal/70">{prog.desc}</p>
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-4 text-sm uppercase tracking-[0.3em]">Overview</div>
          <div>{prog.days} days per week ? Focused strength & conditioning</div>
        </div>
        <div className="mt-8 flex gap-4">
          <Link to="/tracker"><Button>Start program</Button></Link>
          <Link to="/fitness"><Button variant="outline">Back</Button></Link>
        </div>
      </div>
    </main>
  )
}
