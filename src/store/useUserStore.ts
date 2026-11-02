import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserState {
  profile: any
  setProfile: (p: any) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (p) => set({ profile: p }),
    }),
    { name: 'checkme-user' }
  )
)
