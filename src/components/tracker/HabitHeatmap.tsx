import { useTrackerStore } from '../../store/useTrackerStore'

export default function HabitHeatmap() {
  const { habits, toggleHabit } = useTrackerStore()
  const days = Array.from({ length: 28 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (27 - i))
    return d.toISOString().split('T')[0]
  })

  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((d) => {
        const active = habits && habits['water']?.[d]
        return (
          <button key={d} onClick={() => toggleHabit('water', d)} className={'h-8 w-8 rounded ' + (active ? 'bg-lime' : 'bg-charcoal/10')} />
        )
      })}
    </div>
  )
}
