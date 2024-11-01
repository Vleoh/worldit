import { Server, Wifi, Database, Network } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Network className="w-12 h-12 text-[#9C4CA1]" />,
      title: "Instalaciones de fibra óptica",
      description: "Realizamos instalaciones de equipos de red, tanto routers, switches, access point, como también cableado estructurado categoría 5e, 6, 6a y Fibra Óptica."
    },
    {
      icon: <Server className="w-12 h-12 text-[#9C4CA1]" />,
      title: "Centro de Procesamiento de Datos",
      description: "Adaptamos y convertimos tu sala en un cuarto de cableado acorde a las normas vigentes. Un Data Center es un centro de datos crucial para tu empresa."
    },
    {
      icon: <Wifi className="w-12 h-12 text-[#9C4CA1]" />,
      title: "Mantenimiento de Redes",
      description: "Ofrecemos servicio de Mantenimiento de Redes para garantizar el funcionamiento óptimo de su infraestructura."
    },
    {
      icon: <Database className="w-12 h-12 text-[#9C4CA1]" />,
      title: "Equipamiento de salas y oficinas",
      description: "Instalamos la infraestructura necesaria en salas y oficinas para el uso adecuado y eficaz de los equipos informáticos."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}