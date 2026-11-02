import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 font-display text-2xl">CheckMe</div>
            <p className="text-sm text-cream/70">Check in with your best self.</p>
          </div>
          <div>
            <div className="mb-4 text-sm uppercase tracking-[0.2em]">Explore</div>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><Link to="/quiz" className="transition-all hover:text-lime hover:drop-shadow-[0_0_20px_rgba(198,244,50,0.6)]">Quiz</Link></li>
              <li><Link to="/tracker" className="transition-all hover:text-lime hover:drop-shadow-[0_0_20px_rgba(198,244,50,0.6)]">Tracker</Link></li>
              <li><Link to="/mealplans" className="transition-all hover:text-lime hover:drop-shadow-[0_0_20px_rgba(198,244,50,0.6)]">Meal Plans</Link></li>
              <li><Link to="/fitness" className="transition-all hover:text-lime hover:drop-shadow-[0_0_20px_rgba(198,244,50,0.6)]">Fitness</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-sm uppercase tracking-[0.2em]">Company</div>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><Link to="/about" className="transition-all hover:text-lime hover:drop-shadow-[0_0_20px_rgba(198,244,50,0.6)]">About</Link></li>
              <li><Link to="/blog" className="transition-all hover:text-lime hover:drop-shadow-[0_0_20px_rgba(198,244,50,0.6)]">Blog</Link></li>
              <li><Link to="/contact" className="transition-all hover:text-lime hover:drop-shadow-[0_0_20px_rgba(198,244,50,0.6)]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-sm uppercase tracking-[0.2em]">Newsletter</div>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input className="flex-1 rounded-full bg-cream/10 px-4 py-2 text-sm" placeholder="your@email.com" />
              <button type="submit" className="rounded-full bg-lime px-6 py-2 text-sm text-forest transition-all hover:bg-forest hover:text-lime hover:shadow-[0_0_30px_rgba(198,244,50,0.6)]">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-cream/10 pt-6 text-center text-xs text-cream/50">
          {new Date().getFullYear()} CheckMe. All rights reserved. Not a substitute for professional medical advice.
        </div>
      </div>
    </footer>
  )
}