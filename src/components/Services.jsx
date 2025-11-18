import { HardHat, Ruler, Building2, Factory } from 'lucide-react'

const services = [
  {
    icon: HardHat,
    title: 'General Contracting',
    desc: 'End-to-end delivery from preconstruction to handover with rigorous QA/QC.'
  },
  {
    icon: Ruler,
    title: 'Civil & Infrastructure',
    desc: 'Roads, utilities, foundations and structural works engineered for longevity.'
  },
  {
    icon: Building2,
    title: 'Commercial Builds',
    desc: 'Offices, industrial units and mixed-use developments with bold, minimal design.'
  },
  {
    icon: Factory,
    title: 'Project Management',
    desc: 'Planning, scheduling and cost control to keep every project on track.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Capabilities</h2>
          <p className="text-white/60 max-w-xl">Focused, reliable and built on safety. We keep it minimal and deliver what matters.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <Icon className="w-8 h-8 text-orange-500" />
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
