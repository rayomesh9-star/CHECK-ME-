import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-md px-6">
        <h1 className="text-4xl font-display text-center">Login</h1>
        <form className="mt-10 space-y-4 rounded-3xl bg-white p-8 shadow-xl">
          <input className="w-full rounded-2xl border border-charcoal/10 p-4" placeholder="Email" />
          <input className="w-full rounded-2xl border border-charcoal/10 p-4" placeholder="Password" type="password" />
          <Button className="w-full">Sign in</Button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/account" className="text-sm underline">Back to account</Link>
        </div>
      </div>
    </main>
  )
}
