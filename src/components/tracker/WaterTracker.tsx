import { useTrackerStore } from '../../store/useTrackerStore'
import Button from '../ui/Button'

export default function WaterTracker() {
  const { water, addWater, resetWater } = useTrackerStore()

  return (
    <div className="text-center">
      <div className="text-4xl font-display">{water} ml</div>
      <div className="mt-4 flex justify-center gap-2">
        <Button onClick={() => addWater(250)}>+250ml</Button>
        <Button onClick={() => addWater(500)}>+500ml</Button>
        <Button variant="outline" onClick={resetWater}>Reset</Button>
      </div>
    </div>
  )
}
