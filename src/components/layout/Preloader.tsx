import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) {
      setProgress(100)
      setTimeout(() => setDone(true), 400)
      return
    }
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setDone(true), 600)
          return 100
        }
        return p + 4
      })
    }, 30)
    return () => clearInterval(interval)
  }, [reduce])

  if (done) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-forest text-lime"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-4xl font-display tracking-tight"
        >
          CheckMe
        </motion.div>
        <div className="text-sm tracking-[0.3em]">{progress}%</div>
      </div>
    </motion.div>
  )
}
