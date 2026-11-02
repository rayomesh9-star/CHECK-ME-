import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'

export default function RevealText({ children, className = '' }: { children: string; className?: string }) {
  const words = children.split(' ')
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span variants={fadeUp} className="inline-block">
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}
