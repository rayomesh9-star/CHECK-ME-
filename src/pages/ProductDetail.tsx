import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCartStore } from '../store/useCartStore'
import Button from '../components/ui/Button'

export default function ProductDetail() {
  const { id } = useParams()
  const p = products.find((prod) => prod.id === id)
  const { add } = useCartStore()

  if (!p) return <div className="min-h-screen pt-32 px-6">Not found</div>

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="h-80 rounded-3xl bg-gradient-to-br from-lime/20 to-forest/10" />
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-charcoal/60">{p.category}</div>
            <h1 className="mt-4 text-4xl font-display">{p.name}</h1>
            <div className="mt-4 text-2xl"></div>
            <p className="mt-4 text-charcoal/70">{p.desc}</p>
            <div className="mt-8 flex gap-4">
              <Button onClick={() => add({ ...p, qty: 1 })}>Add to cart</Button>
              <Link to="/shop"><Button variant="outline">Back</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
