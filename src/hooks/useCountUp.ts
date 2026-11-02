import { useEffect, useRef } from 'react'

export function useCountUp(target: number, duration = 1200) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = 0
    const startTime = performance.now()
    const step = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      const val = Math.floor(start + (target - start) * ease)
      el.textContent = val.toString()
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration])

  return ref
}
