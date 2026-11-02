import { motion } from 'framer-motion'

export default function RevealImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={['overflow-hidden rounded-3xl', className].join(' ')}>
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.2, clipPath: 'inset(10% 10% 10% 10%)' }}
        whileInView={{ scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  )
}
