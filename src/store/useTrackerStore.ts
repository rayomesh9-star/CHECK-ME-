import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTrackerStore = create<any>()(
  persist(
    (set, get) => ({
      weighIns: [],
      foodLogs: [],
      water: 0,
      workouts: [],
      habits: {},
      addWeighIn: (w: any) => set({ weighIns: [...(get().weighIns || []), { id: Date.now(), ...w }] }),
      addFood: (f: any) => set({ foodLogs: [...(get().foodLogs || []), { id: Date.now(), ...f }] }),
      addWater: (n: number) => set({ water: (get().water || 0) + n }),
      resetWater: () => set({ water: 0 }),
      addWorkout: (w: any) => set({ workouts: [...(get().workouts || []), { id: Date.now(), ...w }] }),
      toggleHabit: (key: string, date: string) => {
        const habits = get().habits || {}
        habits[key] = habits[key] || {}
        habits[key][date] = !habits[key][date]
        set({ habits })
      },
    }),
    { name: 'checkme-tracker' }
  )
)
