import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_40%)] pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <CTA />
      </main>
      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/60">
            <div className="w-5 h-5 rounded-sm bg-orange-500" />
            <span className="text-sm">Metrix • Civil Engineering & Construction</span>
          </div>
          <span className="text-xs text-white/40">© {new Date().getFullYear()} Metrix. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
