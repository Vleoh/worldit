import { ArrowRight } from 'lucide-react';

const metaItems = [
  'Latencia global: 1.4ms',
  '40Gbps core',
  'Protocolo operacional',
];

const infrastructureLayers = [
  {
    label: 'Fibra optica',
    accentClassName: 'bg-[var(--green)]',
    barClassName: 'bg-[var(--green)] w-4/5',
  },
  {
    label: 'Cableado estructurado',
    accentClassName: 'bg-[var(--violet)]',
    barClassName: 'bg-[var(--violet)] w-3/5',
  },
  {
    label: 'WiFi corporativo',
    accentClassName: 'bg-[var(--accent-orange)]',
    barClassName: 'bg-[var(--accent-orange)] w-2/3',
  },
  {
    label: 'Racks e infraestructura',
    accentClassName: 'bg-[var(--green)]',
    barClassName: 'bg-white/70 w-5/6',
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-noise relative isolate overflow-hidden border-b border-white/8 bg-[var(--page-bg)] px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32"
    >
      <div className="absolute inset-0 -z-20">
        <img
          src="/img/hero.png"
          alt="Infraestructura de red"
          className="h-full w-full object-cover opacity-30 saturate-0"
        />
      </div>

      <div className="absolute inset-0 -z-10 tech-grid opacity-40"></div>

      <div className="section-shell relative">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl">
            <h1 className="font-heading text-[4rem] uppercase leading-[0.84] text-white sm:text-[5.4rem] lg:text-[7rem]">
              <span className="block">Infraestructura</span>
              <span className="block italic text-[var(--green)]">sin limites:</span>
              <span className="block">la vanguardia real</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Soluciones de ingenieria de alta precision para operaciones criticas en el ecosistema digital global.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[var(--green)] bg-[var(--green)] px-6 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-slate-950 shadow-[0_0_26px_rgba(74,222,128,0.26)] transition-transform hover:-translate-y-0.5"
              >
                Activa tu infraestructura
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-sm border border-white/14 bg-white/5 px-6 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/80 transition-colors hover:border-white/24 hover:bg-white/8"
              >
                Documentacion tecnica
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[32rem] lg:block">
            <div className="network-shell absolute inset-8 overflow-hidden rounded-[1.8rem] border border-white/8 backdrop-blur-sm">
              <img
                src="/img/img4.png"
                alt="Infraestructura World IT"
                className="absolute inset-0 h-full w-full object-cover opacity-20 saturate-0"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,22,25,0.38),rgba(21,22,25,0.86))]"></div>
              <div className="absolute inset-0 tech-grid opacity-10"></div>

              <div className="absolute left-8 right-8 top-8">
                <div className="rounded-sm border border-white/8 bg-black/20 px-4 py-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/44">
                      Arquitectura conectada
                    </p>
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--green)] shadow-[0_0_14px_rgba(74,222,128,0.72)]"></span>
                  </div>
                  <div className="mt-4 h-px w-full bg-white/8"></div>
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    <span className="h-1.5 rounded-full bg-[var(--green)]"></span>
                    <span className="h-1.5 rounded-full bg-white/10"></span>
                    <span className="h-1.5 rounded-full bg-[var(--violet)]"></span>
                    <span className="h-1.5 rounded-full bg-[var(--accent-orange)]"></span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-8 bottom-8 space-y-4">
                {infrastructureLayers.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-sm border border-white/8 bg-[rgba(0,0,0,0.2)] px-4 py-4 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex h-3 w-3 rounded-full ${item.accentClassName}`}></span>
                      <span className="text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-white">
                        {item.label}
                      </span>
                    </div>
                    <div className="mt-3 h-1.5 w-full rounded-full bg-white/8">
                      <span className={`block h-full rounded-full ${item.barClassName}`}></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-3 border-t border-white/8 pt-5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/42 sm:grid-cols-3">
          {metaItems.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
