import RevealText from '../components/motion/RevealText'
import Button from '../components/ui/Button'
import Marquee from '../components/motion/Marquee'
import RevealImage from '../components/motion/RevealImage'
import ParallaxLayer from '../components/motion/ParallaxLayer'
import HorizontalScroll from '../components/motion/HorizontalScroll'
import TiltCard from '../components/motion/TiltCard'
import CountUp from '../components/ui/CountUp'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-forest text-cream">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-lime/10 blur-[120px]" />
        <ParallaxLayer speed={0.3} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Athlete training"
            className="h-full w-full object-cover opacity-40"
          />
        </ParallaxLayer>
        <div className="grain absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <RevealText className="text-[clamp(3rem,10vw,9rem)] font-display leading-[0.88] tracking-[-0.02em]">Check in with your best self.</RevealText>
          </motion.div>
          <p className="mt-6 text-lg text-cream/80 md:text-xl text-balance">Personalized meal plans, fitness programs, and a goal-driven tracker built for real results.</p>
          <div className="mt-10 flex justify-center">
            <Link to="/quiz"><Button variant="lime">Take the Check-Up</Button></Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-8">
        <Marquee items={['Fat Loss', 'Muscle Gain', 'Energy', 'Gut Health', 'Performance']} />
      </section>

      <section className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <RevealText className="text-[clamp(2.5rem,8vw,6rem)] font-display tracking-[-0.02em]">How it works</RevealText>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: 'Check-Up', desc: 'Tell us your goals, body, and lifestyle.' },
              { step: 'Plan', desc: 'Get a tailored meal plan and program.' },
              { step: 'Track', desc: 'Log weight, meals, workouts, and habits.' },
              { step: 'Adjust', desc: 'Smart insights keep you on track.' },
            ].map((item, i) => (
              <TiltCard key={item.step}>
                <div className="rounded-3xl bg-white/90 backdrop-blur-xl p-10 text-center shadow-[0_60px_120px_-80px_rgba(11,43,38,0.9)] border border-charcoal/5 h-full">
                  <div className="mb-4 text-sm uppercase tracking-[0.3em] text-charcoal/40">0{i + 1}</div>
                  <div className="text-2xl font-display">{item.step}</div>
                  <p className="mt-3 text-sm text-charcoal/70">{item.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest px-6 py-24 text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <RevealText className="text-[clamp(2.5rem,8vw,6rem)] font-display tracking-[-0.02em]">Track what matters</RevealText>
            <p className="mt-6 text-cream/70 text-balance">Weight, habits, meals, workouts, and milestones?all in one place with insights that actually help.</p>
          </div>
          <RevealImage src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Healthy bowl" />
        </div>
      </section>

      <HorizontalScroll>
        {[
          { title: 'Meal Plans', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { title: 'Fitness Programs', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { title: 'Supplements', img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        ].map((card) => (
          <TiltCard key={card.title} className="min-w-[320px] md:min-w-[420px]">
            <div className="relative h-[420px] w-[320px] overflow-hidden rounded-3xl md:w-[420px]">
              <img src={card.img} alt={card.title} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-2xl font-display text-cream">{card.title}</div>
            </div>
          </TiltCard>
        ))}
      </HorizontalScroll>

      <section className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <CountUp end={10} label="Programs" />
            <CountUp end={8} label="Meal Plans" />
            <CountUp end={100} label="Foods Tracked" />
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="relative overflow-hidden bg-forest px-6 py-32 text-cream">
        <div className="absolute -top-40 right-[-10%] h-80 w-80 rounded-full bg-lime/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <RevealText className="text-[clamp(2.5rem,8vw,7rem)] font-display tracking-[-0.02em]">Ready to check in?</RevealText>
          <div className="mt-10 flex justify-center">
            <Link to="/quiz"><Button variant="lime">Start your journey</Button></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
