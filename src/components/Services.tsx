import { BrainCircuit, Cable, ShieldCheck, Workflow } from 'lucide-react';

const services = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-[#5325c7]" />,
    title: 'Camaras inteligentes con IA',
    description:
      'Implementamos camaras 4K con deteccion de intrusos, reconocimiento de placas y alertas predictivas en tiempo real.'
  },
  {
    icon: <BrainCircuit className="w-12 h-12 text-[#5325c7]" />,
    title: 'Monitoreo y analitica 24/7',
    description:
      'Tableros en vivo, integraciones con apps de seguridad y soporte de especialistas que responden en minutos.'
  },
  {
    icon: <Cable className="w-12 h-12 text-[#5325c7]" />,
    title: 'Infraestructura lista para IA',
    description:
      'Cableado estructurado, fibra optica y redes Wi-Fi optimizadas para video inteligente sin latencia.'
  },
  {
    icon: <Workflow className="w-12 h-12 text-[#5325c7]" />,
    title: 'Integracion y mantenimiento total',
    description:
      'Automatizamos el flujo entre seguridad fisica, control de accesos y sistemas de gestion para una experiencia unificada.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-48 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-[#20B24D]/20 to-[#5325c7]/10 blur-3xl" />
        <div className="absolute -bottom-48 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-[#5325c7]/20 to-[#20B24D]/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#20B24D] font-semibold tracking-[0.3em] text-xs uppercase">Soluciones integrales</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            De la camara al dato accionable en segundos
          </h2>
          <p className="text-gray-600 mt-4">
            Combinamos hardware premium, IA avanzada y una infraestructura robusta para que todo tu equipo tenga visibilidad instantanea y decisiones respaldadas por datos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-[#5325c7]/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
