const projects = [
  {
    title: 'Red troncal de baja latencia para nexus financiero',
    description:
      'Implementación de 2.5km de fibra OM4 y reestructuración de data center core con cero ventanas de alta velocidad.',
    image: '/img/img4.png',
    tags: ['Backbone IP', 'Baja latencia'],
    color: 'text-[var(--green)]',
  },
  {
    title: 'Ecosistema de seguridad IA para global port',
    description:
      'Red de 400 cámaras 4K con procesamiento de borde y almacenamiento redundante de 2PB para control logístico total.',
    image: '/img/img1.png',
    tags: ['Logística core', 'Edge surveillance'],
    color: 'text-[var(--violet)]',
  },
];

export default function Testimonials() {
  return (
    <section id="projects" className="border-b border-white/8 bg-[var(--page-bg)] px-4 py-24 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="text-center">
          <p className="eyebrow justify-center">Casos de éxito: kinetic projects</p>
          <h2 className="mt-5 font-heading text-5xl uppercase leading-[0.9] text-white sm:text-6xl">
            Operaciones que ya escalan
          </h2>
        </div>

        <div className="mt-16 space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`grid gap-6 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
              }`}
            >
              <div className="tech-panel overflow-hidden rounded-sm">
                <img src={project.image} alt={project.title} className="h-[20rem] w-full object-cover opacity-58 saturate-0" />
              </div>

              <div className="px-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-white/10 bg-white/5 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/72"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-6 font-heading text-5xl uppercase leading-[0.9] text-white">{project.title}</h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/62">{project.description}</p>
                <a href="#contact" className={`mt-6 inline-flex text-[0.66rem] font-bold uppercase tracking-[0.2em] ${project.color}`}>
                  Tecnología lista
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
