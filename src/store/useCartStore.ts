import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartState {
  items: any[]
  add: (item: any) => void
  remove: (id: string) => void
  clear: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (item) => set((s) => ({ items: [...s.items, item] })),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      clear: () => set({ items: [] }),
    }),
    { name: 'checkme-cart' }
  )
)
