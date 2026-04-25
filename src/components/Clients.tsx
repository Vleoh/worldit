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

export default function Clients() {
  return (
    <section id="trusted-brands" className="border-b border-white/8 bg-[var(--page-bg)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Marcas que confiaron en nosotros</p>
            <h2 className="mt-5 max-w-2xl font-heading text-4xl uppercase leading-[0.92] text-white sm:text-5xl">
              Infraestructura ejecutada para operaciones reales
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/58">
            Operaciones que exigen criterio técnico, continuidad y despliegue prolijo sobre entornos productivos.
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
    </section>
  );
}
