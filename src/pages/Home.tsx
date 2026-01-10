export function Home() {
  const teamMembers = [
    {
      name: 'Dmitri Christopoulos',
      role: 'Mechanical and Integration Engineer',
    },
    { name: 'Sehaj Cheema', role: 'Mechanical Engineer' },
    { name: 'Yang Li', role: 'Controls and Electrical Engineer' },
    { name: 'Patrick Kimumwe', role: 'Software Engineer' },
    { name: 'James Chen', role: 'Software Engineer' },
  ]

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <header className="flex items-center gap-6 py-12 px-8 max-w-5xl mx-auto">
        <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-black shadow-lg shadow-white/5">
          <img
            src="/kolibri-logo.png"
            alt="Kolibri Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-left">
          <h1
            className="text-5xl font-light tracking-tight text-white mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Kolibri
          </h1>
          <p className="text-lg text-zinc-400 font-light tracking-wide">
            A holonomic drone built for search and rescue
          </p>
        </div>
      </header>

      {/* CAD Section */}
      <section className="py-16 px-8 border-t border-b border-cyan-500/30 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-xl md:text-2xl font-light text-zinc-300 mb-12 tracking-wide">
            Engineered for precise movement with six independently controlled
            motors
          </h2>

          {/* 3D Perspective Container */}
          <div
            className="relative mx-auto max-w-3xl"
            style={{ perspective: '1200px' }}
          >
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/80 shadow-2xl shadow-black/50 border border-white/5"
              style={{
                transform: 'rotateX(8deg) rotateY(-2deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

              <img
                src="/drone-cad.png"
                alt="Kolibri Drone CAD Render"
                className="w-full h-auto object-contain p-8"
              />
            </div>

            {/* Shadow underneath */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-xl rounded-full"
              style={{ transform: 'translateX(-50%) rotateX(80deg)' }}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-8 border-b border-cyan-500/30 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-xl md:text-2xl font-light text-zinc-300 mb-12 tracking-wide">
            Introducing our Engineering Team
          </h2>

          {/* Team Members List */}
          <div className="max-w-2xl mx-auto space-y-4 text-left">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-3 border-b border-zinc-800/50 last:border-0 animate-in fade-in slide-in-from-bottom-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both',
                }}
              >
                <span className="text-lg font-medium text-white">
                  {member.name}
                </span>
                <span className="text-zinc-500 hidden sm:inline">—</span>
                <span className="text-zinc-400 font-light">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-16" />
    </div>
  )
}
