const steps = [
  {
    id: '01',
    title: 'Relevamiento',
    description: 'Auditoria fisica y logica con sensores de red y lectura de trafico basal.',
    color: 'text-[var(--green)] border-[rgba(74,222,128,0.35)]',
  },
  {
    id: '02',
    title: 'Propuesta tecnica',
    description: 'Diseno de arquitectura y matriz de puertos con planos de ejecucion controlada.',
    color: 'text-[var(--violet)] border-[rgba(156,76,161,0.35)]',
  },
  {
    id: '03',
    title: 'Despliegue de campo',
    description: 'Ejecucion sobre sitio con minima interrupcion, testing y evidencia tecnica.',
    color: 'text-[var(--accent-orange)] border-[rgba(249,115,22,0.35)]',
  },
  {
    id: '04',
    title: 'Soporte 24/7',
    description: 'Monitoreo continuo, remediacion y mantenimiento versionado sobre cada enlace.',
    color: 'text-[var(--green)] border-[rgba(74,222,128,0.35)]',
  },
];

export default function ServiceShowcase() {
  return (
    <section id="method" className="border-b border-white/8 bg-[var(--page-bg)] px-4 py-24 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="text-center">
          <p className="eyebrow justify-center">Protocolo de despliegue</p>
          <h2 className="mt-5 font-heading text-5xl uppercase leading-[0.9] text-white sm:text-6xl">
            Precision operacional
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-white/10 xl:block"></div>
          {steps.map((step) => (
            <article key={step.id} className="relative text-center xl:text-left">
              <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-sm border bg-[rgba(255,255,255,0.02)] xl:mx-0">
                <span className={`font-heading text-4xl uppercase ${step.color}`}>{step.id}</span>
              </div>
              <p className="mt-6 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/42">
                Etapa {step.id}
              </p>
              <h3 className="mt-3 font-heading text-3xl uppercase leading-[0.92] text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
