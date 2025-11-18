import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between border-b border-white/10 backdrop-blur bg-black/40 rounded-b-xl mt-2 px-4">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-orange-500" />
            <span className="text-white font-extrabold tracking-wider uppercase">Metrix</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-white/80 hover:text-white transition">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-400 transition">
              Get Quote
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-xl border border-white/10 bg-black/80 backdrop-blur p-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 bg-orange-500 text-black font-semibold text-center">
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
