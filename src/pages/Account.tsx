import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function Account() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-display">Account</h1>
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">
          <div>Welcome to your account</div>
          <div className="mt-6">
            <Link to="/login"><Button variant="outline">Login</Button></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
