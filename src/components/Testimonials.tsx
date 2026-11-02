import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const items = [
    { name: 'Maya', text: 'Lost 12kg and actually kept it off. The tracker keeps me honest.' },
    { name: 'Jay', text: 'Meal plans are delicious and easy. Gym never looked this good.' },
    { name: 'Aisha', text: 'The Check-Up nailed my macros. I feel stronger every week.' },
  ]
  const [index, setIndex] = useState(0)

  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white p-12 shadow-xl"
        >
          <p className="text-xl md:text-2xl">"{items[index].text}"</p>
          <div className="mt-6 text-sm uppercase tracking-[0.3em] text-charcoal/60">- {items[index].name}</div>
        </motion.div>
        <div className="mt-8 flex justify-center gap-4">
          {items.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={i === index ? 'h-2 w-2 rounded-full bg-lime' : 'h-2 w-2 rounded-full bg-charcoal/20'} />
          ))}
        </div>
      </div>
    </section>
  )
}
