import { useCartStore } from '../store/useCartStore'
import Button from '../components/ui/Button'
import { Link, useNavigate } from 'react-router-dom'

export default function Checkout() {
  const { items, clear } = useCartStore()
  const nav = useNavigate()
  const cartItems: any[] = items || []

  const place = () => {
    clear()
    nav('/order-confirmation')
  }

  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-display">Checkout</h1>
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl">
          {cartItems.length === 0 ? (
            <div>Your cart is empty.</div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((i: any, idx: number) => (
                <div key={idx} className="flex justify-between">
                  <div>{i.name} x{i.qty || 1}</div>
                  <div></div>
                </div>
              ))}
              <div className="border-t pt-4 text-lg">Total: </div>
              <Button onClick={place}>Place order</Button>
            </div>
          )}
        </div>
        <div className="mt-6">
          <Link to="/shop"><Button variant="outline">Back to shop</Button></Link>
        </div>
      </div>
    </main>
  )
}
