const clients = [
  { name: 'Farmacity', logo: '/img/farm.png' },
  { name: 'Ford', logo: '/img/ford.png' },
  { name: 'Ball', logo: '/img/ball.png' },
  { name: 'Zettalan', logo: '/img/zeta.png' },
  { name: 'Paia', logo: '/img/paia.png' }
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">Confianza comprobada</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Empresas lideres protegen sus operaciones con WORLD IT
          </h2>
          <p className="text-gray-600 mt-4">
            Implementamos proyectos de seguridad inteligente en retail, industria, logistica y corporativo, con resultados medibles desde el primer trimestre.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center">
          {clients.map((client) => (
            <div key={client.logo} className="flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
