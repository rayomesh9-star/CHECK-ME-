import React from 'react'
import { motion } from 'framer-motion'
import { useMagnetic } from '../../hooks/useMagnetic'
import { cn } from '../../lib/utils'

interface ButtonProps {
  variant?: 'lime' | 'outline' | 'ghost'
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  'data-cursor'?: string
}

export default function Button({ variant = 'lime', children, className, onClick, type = 'button', ...props }: ButtonProps) {
  const ref = useMagnetic() as any

  const variants = {
    lime: 'bg-lime text-forest hover:shadow-[0_0_60px_rgba(198,244,50,0.6)]',
    outline: 'border border-charcoal/40 hover:border-lime hover:text-lime',
    ghost: 'hover:bg-charcoal/5',
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      data-cursor="Click"
      className={cn('relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm uppercase tracking-[0.2em] transition-all overflow-hidden group', variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-lime/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
    </motion.button>
  )
}
