import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '../../hooks/useMousePosition'

export default function CustomCursor() {
  const { x, y } = useMousePosition()
  const [label, setLabel] = useState<string | null>(null)

  useEffect(() => {
    const onOver = (e: Event) => {
      const target = e.target as HTMLElement
      const l = target.dataset.cursor
      setLabel(l || null)
    }
    window.addEventListener('mouseover', onOver)
    return () => window.removeEventListener('mouseover', onOver)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[999] hidden md:block"
      animate={{ x: x - (label ? 24 : 4), y: y - (label ? 24 : 4) }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      <motion.div
        className={label ? 'h-12 w-12 px-2 text-center rounded-full bg-lime flex items-center justify-center text-[10px] uppercase tracking-widest text-forest' : 'h-2 w-2 rounded-full bg-lime'}
      >
        {label}
      </motion.div>
    </motion.div>
  )
}
