import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { ReactNode } from 'react'

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation()
  const reduce = useReducedMotion()

  if (reduce) {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.6, ease: [0.87, 0, 0.13, 1] }}
          style={{ transformOrigin: 'bottom' }}
          className="fixed inset-0 z-[80] bg-lime"
        />
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.6, ease: [0.87, 0, 0.13, 1] }}
          style={{ transformOrigin: 'top' }}
          className="fixed inset-0 z-[80] bg-lime flex items-center justify-center"
        >
          <div className="font-display text-2xl text-forest">CheckMe</div>
        </motion.div>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
