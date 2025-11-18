const projects = [
  {
    name: 'Metro Link Viaduct',
    tag: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1645941680325-444b8869a375?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZXRybyUyMExpbmslMjBWaWFkdWN0fGVufDB8MHx8fDE3NjM0NjEyOTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    name: 'Harbor Logistics Hub',
    tag: 'Industrial',
    image: 'https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Axis Corporate Tower',
    tag: 'Commercial',
    image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600&auto=format&fit=crop'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Selected Work</h2>
          <a href="#contact" className="text-sm font-semibold text-orange-500 hover:text-orange-400">Start your project →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="group rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition" />
              </div>
              <div className="p-5">
                <div className="text-xs text-white/60">{p.tag}</div>
                <h3 className="mt-1 text-white font-bold">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
