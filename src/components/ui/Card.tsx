import { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export default function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-3xl bg-white/90 backdrop-blur-xl shadow-[0_60px_120px_-80px_rgba(11,43,38,0.8)] border border-charcoal/5', className)}>
      {children}
    </div>
  )
}
