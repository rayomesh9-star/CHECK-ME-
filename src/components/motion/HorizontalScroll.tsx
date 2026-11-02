import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HorizontalScroll({ children }: { children: React.ReactNode }) {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: targetRef })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-70%'])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-cream">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-6">
          {children}
        </motion.div>
      </div>
    </section>
  )
}
