import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useMagnetic } from '../../hooks/useMagnetic'

export default function Navbar() {
  const magRef = useMagnetic()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/quiz', label: 'Check-Up' },
    { to: '/tracker', label: 'Tracker' },
    { to: '/mealplans', label: 'Meal Plans' },
    { to: '/fitness', label: 'Fitness' },
    { to: '/shop', label: 'Shop' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${scrolled ? 'text-charcoal bg-cream/90 backdrop-blur-xl border-b border-charcoal/5' : 'text-white bg-forest'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-display text-xl tracking-tight">CheckMe</Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="group relative text-sm uppercase tracking-[0.2em]">
              <span className="inline-block transition-transform group-hover:-translate-y-1">{l.label}</span>
              <span className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-lime transition-transform group-hover:scale-x-100" />
            </Link>
          ))}
          <Link ref={magRef as any} to="/quiz" data-cursor="Start" className="rounded-full bg-lime px-6 py-2 text-sm uppercase tracking-[0.2em] text-forest transition-all hover:bg-forest hover:text-lime hover:shadow-[0_0_30px_rgba(198,244,50,0.4)]">
            Take the Check-Up
          </Link>
        </div>
        <button className="md:hidden relative flex h-10 w-10 items-center justify-center rounded-full bg-lime text-forest transition-all hover:bg-forest hover:text-lime hover:shadow-[0_0_25px_rgba(198,244,50,0.4)]" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="relative flex flex-col items-center justify-center gap-1">
            <motion.span animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="h-[1px] w-4 bg-forest" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="h-[1px] w-4 bg-forest" />
            <motion.span animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} className="h-[1px] w-4 bg-forest" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-[#061814] text-cream md:hidden">
            <div className="flex items-center justify-between px-6 py-5">
              <div className="font-display text-xl">CheckMe</div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="flex h-10 w-10 items-center justify-center rounded-full bg-lime/5 transition-all hover:bg-lime/10 hover:shadow-[0_0_25px_rgba(198,244,50,0.3)]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </button>
            </div>
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="mt-10 flex flex-col items-center gap-6">
              {links.map((l) => (
                <motion.div key={l.to} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <Link to={l.to} onClick={() => setOpen(false)} className="text-3xl font-display transition-all hover:text-lime hover:shadow-[0_0_20px_rgba(198,244,50,0.5)]">{l.label}</Link>
                </motion.div>
              ))}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link to="/quiz" onClick={() => setOpen(false)} className="mt-6 rounded-full bg-lime/5 px-8 py-3 text-sm uppercase tracking-[0.2em] transition-all hover:bg-lime/10 hover:text-lime hover:shadow-[0_0_30px_rgba(198,244,50,0.5)]">Take the Check-Up</Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}