import { useState } from 'react'
import { motion } from 'framer-motion'

export default function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotate({ x: (y - centerY) / 18, y: (centerX - x) / 18 })
    setPos({ x, y })
  }

  const onLeave = () => {
    setRotate({ x: 0, y: 0 })
    setPos({ x: 0, y: 0 })
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className={['[transform-style:preserve-3d] relative group', className].join(' ')}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: 'radial-gradient(320px circle at ' + pos.x + 'px ' + pos.y + 'px, rgba(198,244,50,0.12), transparent 45%)' }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
