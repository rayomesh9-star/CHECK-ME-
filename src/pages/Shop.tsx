import { useState } from 'react'
import { products } from '../data/products'
import { useCartStore } from '../store/useCartStore'
import TiltCard from '../components/motion/TiltCard'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'

export default function Shop() {
  const { add } = useCartStore()
  const [filter, setFilter] = useState('All')
  const cats = ['All', 'Protein', 'Performance', 'Wellness']
  const list = filter === 'All' ? products : products.filter((p) => p.category === filter)

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-charcoal/60">Store</div>
          <h1 className="mt-4 text-4xl font-display md:text-6xl">Shop</h1>
        </div>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {cats.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={'rounded-full px-6 py-2 text-sm uppercase tracking-[0.2em] ' + (filter === c ? 'bg-lime' : 'bg-white')}>{c}</button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <TiltCard key={p.id}>
              <div className="rounded-3xl bg-white p-6 shadow-xl">
                <div className="h-40 rounded-2xl bg-gradient-to-br from-lime/20 to-forest/10" />
                <div className="mt-4 text-sm uppercase tracking-[0.3em] text-charcoal/60">{p.category}</div>
                <div className="mt-2 text-xl font-display">{p.name}</div>
                <div className="mt-2 text-sm text-charcoal/70">{p.desc}</div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg"></div>
                  <Button onClick={() => add({ ...p, qty: 1 })}>Add</Button>
                </div>
                <Link to={'/shop/' + p.id} className="mt-3 inline-block text-xs uppercase tracking-widest underline">Details</Link>
              </div>
            </TiltCard>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/checkout"><Button variant="outline">View Cart</Button></Link>
        </div>
      </div>
    </main>
  )
}
