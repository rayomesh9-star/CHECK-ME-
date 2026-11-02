import { useState } from 'react'
import { useTrackerStore } from '../../store/useTrackerStore'
import Button from '../ui/Button'

export default function WeighInForm() {
  const { addWeighIn } = useTrackerStore()
  const [weight, setWeight] = useState('')
  const [notes, setNotes] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!weight) return
    addWeighIn({ weight: Number(weight), notes, date: new Date().toISOString().split('T')[0] })
    setWeight('')
    setNotes('')
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <input className="w-full rounded-2xl border border-charcoal/10 p-3" placeholder="Weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <input className="w-full rounded-2xl border border-charcoal/10 p-3" placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
      <Button type="submit">Log weigh-in</Button>
    </form>
  )
}
