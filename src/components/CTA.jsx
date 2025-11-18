export default function CTA() {
  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500 to-orange-400 p-10 md:p-14 text-black">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold">Ready to build with Metrix?</h3>
              <p className="mt-2 text-black/80">Share your brief. We’ll respond within one business day.</p>
            </div>
            <form className="grid grid-cols-1 gap-3">
              <input className="rounded-md px-4 py-3 text-sm bg-white/90 placeholder-black/50 border border-black/10" placeholder="Your name" />
              <input className="rounded-md px-4 py-3 text-sm bg-white/90 placeholder-black/50 border border-black/10" placeholder="Email or phone" />
              <textarea rows="3" className="rounded-md px-4 py-3 text-sm bg-white/90 placeholder-black/50 border border-black/10" placeholder="Project details" />
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900 transition">Send Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
