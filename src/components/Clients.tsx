import { Circle } from 'lucide-react';

const trustedBrands = [
  {
    name: 'Ford',
    image: '/img/ford.png',
  },
  {
    name: 'Farmacity',
    image: '/img/farm.png',
  },
  {
    name: 'Ball',
    image: '/img/ball.png',
  },
  {
    name: 'Paia',
    image: '/img/paia.png',
  },
  {
    name: 'Zettalan',
    image: '/img/zeta.png',
  },
];

const metrics = [
  {
    label: 'Latencia',
    value: '1.4ms',
    detail: 'Monitoreo en tiempo real sobre la red troncal.',
    color: 'bg-[var(--green)]',
  },
  {
    label: 'Throughput',
    value: '40Gbps',
    detail: 'Backbone preparado para tráfico corporativo crítico.',
    color: 'bg-[var(--violet)]',
  },
  {
    label: 'Uptime IA',
    value: '99.9%',
    detail: 'Alertas, soporte y continuidad sin ventanas ciegas.',
    color: 'bg-[var(--accent-orange)]',
  },
  {
    label: 'Nodos activos',
    value: '1,204',
    detail: 'Cobertura operativa sobre entornos indoor y outdoor.',
    color: 'bg-[var(--green)]',
  },
];

export default function Clients() {
  return (
    <section id="metrics" className="border-b border-white/8 bg-[var(--page-bg)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="border-b border-white/8 pb-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Marcas que confiaron en nosotros</p>
              <h2 className="mt-5 max-w-2xl font-heading text-4xl uppercase leading-[0.92] text-white sm:text-5xl">
                Infraestructura ejecutada para operaciones reales
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/58">
              Empresas que demandan continuidad, despliegue técnico y criterio operativo sobre entornos productivos.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trustedBrands.map((brand) => (
              <article
                key={brand.name}
                className="group flex min-h-[7.5rem] items-center justify-center rounded-sm border border-white/8 bg-white/[0.04] px-6 py-5 transition-all duration-300 hover:border-[var(--green)]/35 hover:bg-white/[0.08]"
              >
                <div className="flex h-[5.25rem] w-full items-center justify-center rounded-sm bg-white px-5 py-4 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)] transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-12 w-auto grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Métricas de rendimiento global</p>
            <h2 className="mt-5 max-w-xl font-heading text-4xl uppercase leading-[0.92] text-white sm:text-5xl">
              Monitoreo en tiempo real de la red troncal WORLD IT
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/62">
            <Circle className="h-3 w-3 fill-[var(--violet)] text-[var(--violet)]" />
            Live feed terminal
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <article key={metric.label} className="scan-line tech-panel rounded-sm px-5 py-6">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/42">{metric.label}</p>
              <p className="mt-5 font-heading text-5xl uppercase leading-none text-white">{metric.value}</p>
              <p className="mt-4 text-sm leading-7 text-white/60">{metric.detail}</p>
              <div className="metric-line">
                <span className={`${metric.color} w-2/3`}></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
