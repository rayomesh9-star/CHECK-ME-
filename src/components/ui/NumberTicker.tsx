import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/motion'

export default function NumberTicker({ value, label }: { value: number; label: string }) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
      <motion.div variants={fadeUp} className="text-5xl font-display md:text-7xl">{value}+</motion.div>
      <motion.div variants={fadeUp} className="mt-2 text-sm uppercase tracking-[0.3em] text-charcoal/60">{label}</motion.div>
    </motion.div>
  )
}
