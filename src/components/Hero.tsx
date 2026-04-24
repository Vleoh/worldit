import { ArrowRight } from 'lucide-react';
import FloatingInfrastructureBoard from './FloatingInfrastructureBoard';

const metaItems = [
  'Latencia global: 1.4ms',
  '40Gbps core',
  'Protocolo operacional',
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
            <FloatingInfrastructureBoard />
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
