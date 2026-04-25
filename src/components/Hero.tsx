import { ArrowRight } from 'lucide-react';
import FloatingInfrastructureBoard from './FloatingInfrastructureBoard';

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-noise relative isolate overflow-hidden border-b border-white/8 bg-[var(--page-bg)] px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32"
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
            <h1 className="max-w-[10.5ch] font-heading text-[3.15rem] uppercase leading-[0.88] text-white sm:max-w-none sm:text-[5.4rem] lg:text-[7rem]">
              <span className="block">Infraestructura</span>
              <span className="block italic text-[var(--green)]">sin límites:</span>
              <span className="block">la vanguardia real</span>
            </h1>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-white/70 sm:max-w-2xl sm:text-lg">
              Soluciones de ingeniería de alta precisión para operaciones críticas en el ecosistema digital global.
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
                Documentación técnica
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[32rem] lg:block">
            <FloatingInfrastructureBoard />
          </div>
        </div>
      </div>
    </section>
  );
}
