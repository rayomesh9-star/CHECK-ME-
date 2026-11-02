import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-forest pt-32 pb-24 text-center text-cream">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-6xl font-display md:text-9xl">404</h1>
        <p className="mt-4 text-cream/70">Page not found</p>
        <div className="mt-10">
          <Link to="/"><Button variant="lime">Go home</Button></Link>
        </div>
      </div>
    </main>
  )
}
