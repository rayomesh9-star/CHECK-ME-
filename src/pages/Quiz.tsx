import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useQuizStore } from '../store/useQuizStore'
import { useUserStore } from '../store/useUserStore'
import { calcBMI, calcBMR, calcTDEE, calcCalorieTarget, calcMacros, projectGoalDate } from '../utils/calculations'
import { recommend } from '../utils/recommend'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const steps = ['Goal', 'Body', 'Lifestyle', 'Diet', 'Review']

export default function Quiz() {
  const { answers, setAnswer } = useQuizStore()
  const { setProfile } = useUserStore()
  const [step, setStep] = useState(0)
  const nav = useNavigate()

  const goals = ['Fat Loss', 'Muscle Gain', 'Maintain', 'Energy & Gut Health']

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const prev = () => setStep((s) => Math.max(s - 1, 0))

  const calc = () => {
    const weight = Number(answers.weightKg || 70)
    const height = Number(answers.heightCm || 175)
    const age = Number(answers.age || 25)
    const sex = answers.sex || 'male'
    const activity = Number(answers.activity || 1.375)
    const goal = answers.goal === 'Muscle Gain' ? 'gain' : answers.goal === 'Fat Loss' ? 'lose' : 'maintain'
    const bmr = calcBMR(weight, height, age, sex)
    const tdee = calcTDEE(bmr, activity)
    const cals = calcCalorieTarget(tdee, goal)
    const macros = calcMacros(cals, goal)
    const bmi = calcBMI(weight, height)
    const proj = projectGoalDate(weight, Number(answers.targetKg || weight), Number(answers.weeklyPace || 0.5))
    const rec = recommend(answers.goal || '')
    const profile = { ...answers, bmr, tdee, cals, macros, bmi, proj, rec }
    setProfile(profile)
    nav('/results')
  }

  return (
    <main className="min-h-screen bg-cream pt-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-charcoal/60">Check-Up</div>
          <h1 className="mt-4 text-4xl font-display md:text-6xl">Build your plan</h1>
          <div className="mt-6 flex justify-center gap-3">
            {steps.map((s, i) => (
              <div key={s} className={'h-2 w-12 rounded-full ' + (i <= step ? 'bg-lime' : 'bg-charcoal/10')} />
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="goal" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }} transition={{ duration: 0.4 }}>
                <div className="mb-6 text-xl font-display">What's your primary goal?</div>
                <div className="grid gap-3 md:grid-cols-2">
                  {goals.map((g) => (
                    <button key={g} onClick={() => setAnswer('goal', g)} className={'rounded-2xl border p-6 text-left ' + (answers.goal === g ? 'border-lime bg-lime/10' : 'border-charcoal/10')}>
                      {g}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
            {step === 1 && (
              <motion.div key="body" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }} transition={{ duration: 0.4 }}>
                <div className="mb-6 text-xl font-display">Your body</div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="rounded-2xl border border-charcoal/10 p-4" placeholder="Age" value={answers.age || ''} onChange={(e) => setAnswer('age', e.target.value)} />
                  <select className="rounded-2xl border border-charcoal/10 p-4" value={answers.sex || ''} onChange={(e) => setAnswer('sex', e.target.value)}>
                    <option value="">Sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <input className="rounded-2xl border border-charcoal/10 p-4" placeholder="Current weight (kg)" value={answers.weightKg || ''} onChange={(e) => setAnswer('weightKg', e.target.value)} />
                  <input className="rounded-2xl border border-charcoal/10 p-4" placeholder="Target weight (kg)" value={answers.targetKg || ''} onChange={(e) => setAnswer('targetKg', e.target.value)} />
                  <input className="rounded-2xl border border-charcoal/10 p-4 md:col-span-2" placeholder="Height (cm)" value={answers.heightCm || ''} onChange={(e) => setAnswer('heightCm', e.target.value)} />
                </div>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div key="lifestyle" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }} transition={{ duration: 0.4 }}>
                <div className="mb-6 text-xl font-display">Lifestyle</div>
                <div className="grid gap-3">
                  {[1.2, 1.375, 1.55, 1.725, 1.9].map((a) => (
                    <button key={a} onClick={() => setAnswer('activity', a)} className={'rounded-2xl border p-4 text-left ' + (answers.activity === a ? 'border-lime bg-lime/10' : 'border-charcoal/10')}>
                      Activity factor {a}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div key="diet" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }} transition={{ duration: 0.4 }}>
                <div className="mb-6 text-xl font-display">Diet preferences</div>
                <input className="w-full rounded-2xl border border-charcoal/10 p-4" placeholder="Allergies (optional)" value={answers.allergies || ''} onChange={(e) => setAnswer('allergies', e.target.value)} />
                <input className="mt-3 w-full rounded-2xl border border-charcoal/10 p-4" placeholder="Weekly pace (kg/week)" value={answers.weeklyPace || ''} onChange={(e) => setAnswer('weeklyPace', e.target.value)} />
              </motion.div>
            )}
            {step === 4 && (
              <motion.div key="review" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }} transition={{ duration: 0.4 }}>
                <div className="mb-6 text-xl font-display">Review & calculate</div>
                <div className="space-y-2 text-sm text-charcoal/70">
                  <div>Goal: {answers.goal}</div>
                  <div>Age: {answers.age}, Sex: {answers.sex}</div>
                  <div>Weight: {answers.weightKg}kg ? {answers.targetKg}kg</div>
                  <div>Height: {answers.heightCm}cm</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex justify-between">
            <button onClick={prev} className="rounded-full px-6 py-2 text-sm uppercase tracking-[0.2em]">Back</button>
            {step < steps.length - 1 ? (
              <Button onClick={next}>Next</Button>
            ) : (
              <Button onClick={calc}>Calculate & See Results</Button>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
