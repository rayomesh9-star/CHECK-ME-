import { useParams } from 'react-router-dom'

export default function Article() {
  const { id } = useParams()
  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-display md:text-6xl">Article</h1>
        <p className="mt-6 text-charcoal/70">Content for {id}</p>
      </div>
    </main>
  )
}
