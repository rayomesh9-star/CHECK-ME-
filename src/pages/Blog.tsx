import { Link } from 'react-router-dom'

const posts = [
  { id: 'habits', title: 'Building Habits That Stick', category: 'Science' },
  { id: 'protein', title: 'How Much Protein Do You Need?', category: 'Nutrition' },
  { id: 'sleep', title: 'Sleep and Recovery', category: 'Wellness' },
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-sm uppercase tracking-[0.3em] text-charcoal/60">Blog</div>
        <h1 className="mt-4 text-4xl font-display md:text-6xl">Insights</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.id} to={'/blog/' + p.id} className="rounded-3xl bg-white p-8 shadow-xl">
              <div className="text-sm uppercase tracking-[0.3em] text-charcoal/60">{p.category}</div>
              <div className="mt-4 text-xl font-display">{p.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
