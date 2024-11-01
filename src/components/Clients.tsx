export default function Clients() {
  const clients = [
    { name: "Farmacity", logo: "../img/farm.png" },
    { name: "Ford", logo: "../img/ford.png"  },
    { name: "Ball", logo: "../img/ball.png"  },
    { name: "Zettalan", logo: "../img/zeta.png" },
    { name: "Paía", logo: "../img/paia.png"  },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Empresas que confían en nosotros
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}