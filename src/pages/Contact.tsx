import Button from '../components/ui/Button'

export default function Contact() {
  return (
    <main className="min-h-screen bg-cream pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-sm uppercase tracking-[0.3em] text-charcoal/60">Contact</div>
        <h1 className="mt-4 text-4xl font-display md:text-6xl">Coaching</h1>
        <form className="mt-10 space-y-4 rounded-3xl bg-white p-8 shadow-xl">
          <input className="w-full rounded-2xl border border-charcoal/10 p-4" placeholder="Name" />
          <input className="w-full rounded-2xl border border-charcoal/10 p-4" placeholder="Email" />
          <textarea className="w-full rounded-2xl border border-charcoal/10 p-4" rows={5} placeholder="Message" />
          <Button>Send</Button>
        </form>
      </div>
    </main>
  )
}
