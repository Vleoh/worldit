import { BadgeCheck, BarChart2, Clock3, Target } from 'lucide-react';

const differentiators = [
  {
    icon: <Target className="w-8 h-8 text-[#20B24D]" />,
    title: 'Discovery estrategico',
    description: 'Mapeamos riesgos y oportunidades para disenar una arquitectura de seguridad que potencia tu negocio.'
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-[#20B24D]" />,
    title: 'Certificacion y soporte',
    description: 'Equipo certificado por los principales fabricantes, con SLA garantizados y monitoreo continuo.'
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-[#20B24D]" />,
    title: 'Datos que accionan',
    description: 'Informes mensuales con indicadores claros para acelerar decisiones y optimizar inversiones.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at top left, #20B24D20, transparent 55%)' }} />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#20B24D] mb-6">Vision 360</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mas que camaras: disenamos ecosistemas de seguridad inteligente
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Acompanamos a empresas de retail, logistica, industria y corporativo a evolucionar hacia modelos preventivos. Integramos sensores, video analitico y redes robustas en una plataforma unica, lista para escalar.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3 border border-white/10">
                <Clock3 className="w-6 h-6 text-[#20B24D]" />
                <div>
                  <p className="text-sm text-white/60">Tiempo de respuesta</p>
                  <p className="text-lg font-semibold">Menos de 15 minutos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3 border border-white/10">
                <BadgeCheck className="w-6 h-6 text-[#20B24D]" />
                <div>
                  <p className="text-sm text-white/60">Proyectos completados</p>
                  <p className="text-lg font-semibold">+350 instalaciones</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {differentiators.map((item) => (
              <article key={item.title} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur">
                <div className="h-14 w-14 rounded-2xl bg-[#20B24D]/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
