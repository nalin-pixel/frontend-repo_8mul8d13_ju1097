import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" aria-hidden>
        <div className="absolute -left-40 -top-40 w-[600px] h-[600px] rounded-full bg-orange-500 blur-[120px]" />
        <div className="absolute -right-40 -bottom-40 w-[500px] h-[500px] rounded-full bg-white blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-6">
              <span className="block w-2 h-2 rounded-full bg-orange-500" />
              Civil Engineering • Construction • Project Management
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building bold, enduring structures.
              <span className="block text-orange-500">Metrix</span>
            </h1>
            <p className="mt-6 text-white/70 max-w-xl">
              We deliver complex infrastructure and commercial builds with precision, safety, and relentless attention to detail.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contact" className="inline-flex items-center rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-black hover:bg-orange-400 transition">
                Get a Quote
              </a>
              <a href="#projects" className="inline-flex items-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                View Projects
              </a>
            </div>
          </div>
          <div className="h-[420px] rounded-2xl border border-white/10 bg-black/30 overflow-hidden">
            <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
