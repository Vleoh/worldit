import { Camera, Cpu, Radar, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-[#20B24D]" />,
    title: 'Analitica con IA en vivo',
    description: 'Detecta intrusiones, objetos olvidados y comportamiento anomalo en segundos.'
  },
  {
    icon: <Camera className="h-6 w-6 text-[#20B24D]" />,
    title: 'Imagen 4K dia y noche',
    description: 'Visibilidad total con optimizacion automatica en baja iluminacion.'
  },
  {
    icon: <Cpu className="h-6 w-6 text-[#20B24D]" />,
    title: 'Ecosistema conectado',
    description: 'Integramos alarmas, control de accesos y tableros de datos.'
  }
];

export default function Hero() {
  return (
    <header id="top" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(19, 16, 43, 0.85), rgba(2, 108, 87, 0.75)), url(\'https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=2100&q=80\')',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] mb-6 font-semibold">
              Camaras de seguridad con IA
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Protege hoy lo que importa con vision preventiva 24/7
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10">
              Disenamos experiencias de vigilancia que anticipan riesgos y activan respuestas inmediatas. Desde camaras inteligentes hasta cableado estructurado, tu empresa queda lista para crecer sin interrupciones.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#5325c7] to-[#20B24D] font-semibold text-sm uppercase tracking-wide shadow-xl hover:shadow-2xl transition-all"
              >
                Quiero un proyecto a medida
              </a>
              <a
                href="#services"
                className="px-8 py-3 rounded-full border border-white/40 text-sm uppercase tracking-wide font-semibold hover:bg-white/10 transition-colors"
              >
                Ver soluciones
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#5325c7] to-[#20B24D] flex items-center justify-center text-white">
                <Radar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-white/60">Suite inteligente WORLD IT</p>
                <p className="text-lg font-semibold">Control total en una sola plataforma</p>
              </div>
            </div>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-white text-base">{item.title}</p>
                    <p className="text-sm text-white/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/15 text-sm text-white/70">
              Respuesta inmediata de especialistas certificados, soporte remoto y onsite, y reportes accionables cada mes.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
