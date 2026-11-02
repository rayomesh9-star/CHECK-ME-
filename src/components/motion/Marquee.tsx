import { motion } from 'framer-motion'

export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative overflow-hidden py-6">
      <motion.div
        className="flex gap-12 text-sm uppercase tracking-[0.4em]"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="whitespace-nowrap">
            {item} ?
          </span>
        ))}
      </motion.div>
    </div>
  )
}
