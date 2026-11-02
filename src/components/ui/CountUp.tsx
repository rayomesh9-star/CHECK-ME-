import { useCountUp } from '../../hooks/useCountUp'

export default function CountUp({ end, suffix = '+', label }: { end: number; suffix?: string; label: string }) {
  const ref = useCountUp(end) as any

  return (
    <div className="text-center">
      <div className="text-5xl font-display md:text-7xl">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.3em] text-charcoal/60">{label}</div>
    </div>
  )
}
