import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-sm uppercase tracking-[0.3em] text-charcoal/60">About</div>
        <h1 className="mt-4 text-4xl font-display md:text-6xl">Our mission</h1>
        <p className="mt-6 text-lg text-charcoal/70">CheckMe helps people build sustainable health habits with data-driven plans and a motivating tracker.</p>
        <div className="mt-10">
          <Link to="/contact" className="text-sm uppercase tracking-[0.2em] underline">Get in touch</Link>
        </div>
      </div>
    </main>
  )
}
