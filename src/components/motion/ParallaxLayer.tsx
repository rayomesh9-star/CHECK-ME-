import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxLayer({ children, speed = 0.5, className = '' }: { children: React.ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', speed * 30 + '%'])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
