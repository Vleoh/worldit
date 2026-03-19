const clients = [
  { name: 'Farmacity', logo: '/img/farm.png' },
  { name: 'Ford', logo: '/img/ford.png' },
  { name: 'Ball', logo: '/img/ball.png' },
  { name: 'Zettalan', logo: '/img/zeta.png' },
  { name: 'Paia', logo: '/img/paia.png' },
];

export default function Clients() {
  const loopedClients = [...clients, ...clients];

  return (
    <section id="clients" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--green)]">Clientes que confian</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
              Empresas que confian en nuestra infraestructura
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
            Colaboramos con equipos de IT, facilities y operaciones para desplegar conectividad eficiente, segura y
            preparada para crecer.
          </p>
        </div>

        <div className="marquee-mask rounded-3xl border border-[var(--border-color)] bg-[var(--surface-2)] py-8 shadow-[var(--shadow-soft)]">
          <div className="animate-marquee flex w-max items-center gap-10 px-6">
            {loopedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-20 w-44 items-center justify-center rounded-2xl border border-[var(--border-color)] bg-[var(--surface-3)] px-6"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 w-auto object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { value: '10+', label: 'Anios trabajando en telecomunicaciones' },
            { value: '24/7', label: 'Cobertura de soporte tecnico planificado' },
            { value: '5e-6a', label: 'Categorias de cableado estructurado' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-2)] p-5 text-center shadow-[var(--shadow-soft)]">
              <p className="font-heading text-3xl text-[var(--text-primary)]">{item.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
