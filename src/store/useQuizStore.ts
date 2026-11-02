import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface QuizState {
  answers: Record<string, any>
  setAnswer: (key: string, value: any) => void
  reset: () => void
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      answers: {},
      setAnswer: (key, value) => set((s) => ({ answers: { ...s.answers, [key]: value } })),
      reset: () => set({ answers: {} }),
    }),
    { name: 'checkme-quiz' }
  )
)
