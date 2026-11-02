import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function OrderConfirmation() {
  useEffect(() => {
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } })
  }, [])

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-4xl font-display md:text-6xl">Order confirmed!</h1>
        <p className="mt-4 text-charcoal/70">Thanks for shopping with CheckMe.</p>
        <div className="mt-10">
          <Link to="/"><Button>Back home</Button></Link>
        </div>
      </div>
    </main>
  )
}
