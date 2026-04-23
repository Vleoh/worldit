const serviceCards = [
  {
    title: 'Fibra optica de alta densidad',
    description:
      'Redes de backbone disenadas para la maxima transferencia de paquetes sin perdidas, orientadas a operaciones criticas.',
    image: '/img/img2.png',
    label: 'Infraestructura core',
    accent: 'border-[var(--green)]',
    linkColor: 'text-[var(--green)]',
  },
  {
    title: 'CCTV IA-Powered',
    description: 'Vigilancia inteligente con analisis predictivo y reconocimiento de patrones en tiempo real.',
    label: 'Seguridad automatizada',
    accent: 'border-[var(--violet)]',
    linkColor: 'text-[var(--violet)]',
  },
  {
    title: 'Cableado estructurado',
    description: 'Arquitectura Cat6A y Cat7 organizada con protocolos de flujo de aire y gestion termica.',
    label: 'Capa fisica',
    accent: 'border-[var(--accent-orange)]',
    linkColor: 'text-[var(--accent-orange)]',
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-white/8 bg-[var(--page-bg)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="grid gap-4 lg:grid-cols-[1.35fr_0.9fr]">
          <article className="tech-panel relative overflow-hidden rounded-sm lg:row-span-2">
            <img src="/img/img3.png" alt="Fibra optica de alta densidad" className="h-full w-full object-cover opacity-36" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.2),rgba(2,6,23,0.82))]"></div>
            <div className="absolute bottom-0 left-0 right-0 border-l-2 border-[var(--green)] p-7 sm:p-9">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--green)]">
                {serviceCards[0].label}
              </p>
              <h2 className="mt-5 max-w-md font-heading text-5xl uppercase leading-[0.9] text-white">
                {serviceCards[0].title}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/66">{serviceCards[0].description}</p>
              <a
                href="#contact"
                className="mt-7 inline-flex rounded-sm border border-white/12 bg-white/6 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/82"
              >
                Ver especificacion
              </a>
            </div>
          </article>

          <div className="grid gap-4">
            {serviceCards.slice(1).map((card) => (
              <article key={card.title} className={`tech-panel rounded-sm border-l-2 ${card.accent} px-6 py-7`}>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/42">{card.label}</p>
                <h3 className="mt-4 font-heading text-4xl uppercase leading-[0.9] text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{card.description}</p>
                <a href="#contact" className={`mt-6 inline-flex text-[0.62rem] font-bold uppercase tracking-[0.2em] ${card.linkColor}`}>
                  Solicitar base
                </a>
              </article>
            ))}
          </div>

          <article className="tech-panel grid gap-4 rounded-sm border-l-2 border-[var(--green)] px-6 py-7 md:grid-cols-[1fr_auto_auto] md:items-center">
            <div>
              <h3 className="font-heading text-4xl uppercase leading-[0.92] text-white">Gestion critica de IDFs &amp; MDFs</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">
                Estandarizacion y remediacion de centros de datos. Corregimos el caos de cables en una infraestructura
                de precision logica y fisica.
              </p>
            </div>
            <span className="rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/76">
              Feeding total
            </span>
            <span className="rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/76">
              Optimizacion
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}
