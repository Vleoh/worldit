import { ArrowRight, Cable, RadioTower, ShieldCheck, Wifi } from 'lucide-react';

const serviceBullets = [
  'Instalaciones de AP outdoor e indoor',
  'Cableado estructurado categoria 5e, 6 y 6a',
  'Backbone de fibra optica y equipos de red',
  'Soporte tecnico y mantenimiento continuo',
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://worldit.com.ar/wp-content/uploads/2022/07/data.jpg"
          alt="Instalaciones tecnologicas World IT"
          className="h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-black/62"></div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-xl">
            <RadioTower className="h-4 w-4 text-[var(--green)]" />
            Bienvenido a la innovacion en servicios informaticos
          </span>

          <h1 className="mt-8 max-w-3xl font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Instalaciones Tecnologicas
            <span className="block bg-[linear-gradient(90deg,var(--violet),#c892cf,var(--green))] bg-clip-text text-transparent">
              WORLD IT
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/90">
            Realizamos el cableado y estructurado de la red de su empresa, cumpliendo con los estandares de
            homologacion de la industria.
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
            WORLD IT nace de la necesidad que presentan las empresas para poder estructurar y conectar las
            telecomunicaciones de manera eficiente.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/541155990107"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(110deg,var(--violet),var(--green))] px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-[0_18px_40px_rgba(32,178,77,0.25)] transition-all hover:-translate-y-0.5"
            >
              Realicenos su consulta
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-black/35 px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white/90 transition-colors hover:border-[var(--green)] hover:text-[var(--green)]"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="animate-float-card relative">
          <div className="rounded-[1.8rem] border border-[var(--border-color)] bg-[var(--surface-2)] p-6 shadow-[var(--shadow-main)] backdrop-blur-2xl sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Network overview</p>
                <h2 className="mt-2 font-heading text-2xl text-[var(--text-primary)]">Panel de conectividad</h2>
              </div>
              <div className="rounded-xl border border-[var(--green)]/45 bg-[var(--green)]/12 p-3">
                <Wifi className="h-6 w-6 text-[var(--green)]" />
              </div>
            </div>

            <div className="space-y-3">
              {serviceBullets.map((bullet) => (
                <div key={bullet} className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-3)] p-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--green)] shadow-[0_0_10px_rgba(32,178,77,0.8)]"></span>
                    <p className="text-sm text-[var(--text-secondary)]">{bullet}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.13em] text-[var(--text-muted)]">
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-3)] p-3">
                <ShieldCheck className="mb-2 h-4 w-4 text-[var(--green)]" />
                Seguridad de red
              </div>
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-3)] p-3">
                <Cable className="mb-2 h-4 w-4 text-[var(--violet)]" />
                Fibra y cobre
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
