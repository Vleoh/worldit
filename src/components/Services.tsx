import { Activity, Camera, Cable, Database, Radio, Router } from 'lucide-react';

const services = [
  {
    icon: <Cable className="h-6 w-6 text-[var(--violet)]" />,
    title: 'Instalaciones de fibra optica',
    description:
      'Realizamos instalaciones de equipos de red, tanto routers, switches y access point, como tambien cableado estructurado categoria 5e, 6, 6a y fibra optica.',
    image: 'https://worldit.com.ar/wp-content/uploads/2022/07/Fusionadora-world-it.png',
  },
  {
    icon: <Radio className="h-6 w-6 text-[var(--green)]" />,
    title: 'Instalaciones de AP outdoor e indoor',
    description:
      'Implementamos puntos de acceso para espacios internos y exteriores, mejorando cobertura, estabilidad y rendimiento en zonas de alta demanda.',
    image: 'https://worldit.com.ar/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-21-at-1.41.png',
  },
  {
    icon: <Database className="h-6 w-6 text-[var(--violet)]" />,
    title: 'Centro de Procesamiento de Datos',
    description:
      'Adaptamos y convertimos tu sala en un cuarto de cableado acorde a normas vigentes. Un Data Center es el nucleo de operacion de tu empresa.',
    image: 'https://worldit.com.ar/wp-content/uploads/2022/07/data.jpg',
  },
  {
    icon: <Activity className="h-6 w-6 text-[var(--green)]" />,
    title: 'Mantenimiento de redes',
    description:
      'Ofrecemos servicio de mantenimiento de redes para garantizar funcionamiento optimo y continuidad operativa con monitoreo y soporte tecnico.',
    image: 'https://worldit.com.ar/wp-content/uploads/2022/07/FIBRA-2.png',
  },
  {
    icon: <Router className="h-6 w-6 text-[var(--violet)]" />,
    title: 'Equipamiento de salas y oficinas',
    description:
      'Instalamos la infraestructura necesaria en salas y oficinas para el uso adecuado y eficaz de los equipos informaticos.',
    image: 'https://worldit.com.ar/wp-content/uploads/2022/07/CABLEADO-INT.png',
  },
  {
    icon: <Camera className="h-6 w-6 text-[var(--green)]" />,
    title: 'Sistemas de video vigilancia',
    description:
      'Instalacion, soporte tecnico y mantenimiento de videovigilancia: camaras analogicas con DVR y camaras IP con NVR para seguridad y control.',
    image: 'https://worldit.com.ar/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-12-at-5.47.35-PM-3.jpeg',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--green)]">Servicios World IT</p>
            <h2 className="mt-3 max-w-3xl font-heading text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              Soluciones integrales de telecomunicaciones para empresas
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
            Integramos infraestructura fisica, equipamiento y mantenimiento continuo para sostener operaciones estables,
            escalables y alineadas a estandares tecnicos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface-2)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--green)]/40"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,20,0.08)_35%,rgba(6,10,20,0.72)_100%)]"></div>
              </div>

              <div className="p-6">
                <div className="mb-4 inline-flex rounded-xl border border-[var(--border-color)] bg-[var(--surface-3)] p-3">{service.icon}</div>
                <h3 className="font-heading text-2xl text-[var(--text-primary)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
