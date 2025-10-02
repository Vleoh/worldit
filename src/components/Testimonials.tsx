import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Martin Rodriguez',
    company: 'Tech Solutions BA',
    text: 'El sistema de camaras con IA nos alerto sobre un ingreso no autorizado antes de que sonara la alarma. El equipo respondio en minutos.',
    rating: 5
  },
  {
    name: 'Laura Fernandez',
    company: 'Consultora Digital',
    text: 'La visibilidad que tenemos hoy es total. Los reportes mensuales nos ayudan a planificar nuevas aperturas sin miedo a perder control.',
    rating: 5
  },
  {
    name: 'Carlos Gutierrez',
    company: 'Startup Hub Palermo',
    text: 'Dejamos atras multiples proveedores. WORLD IT integra todo y podemos escalar ubicaciones con cero friccion.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#20B24D]">Resultados reales</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Historias de empresas que hoy previenen riesgos con IA
          </h2>
          <p className="text-white/60 mt-4">
            Cada proyecto incluye seguimiento continuo, tableros en vivo y soporte especializado. Asi convertimos datos en decisiones que protegen tus activos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="bg-white/5 border border-white/10 backdrop-blur p-8 rounded-3xl h-full flex flex-col">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-[#FCD34D]" />
                ))}
              </div>
              <p className="text-white/80 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t border-white/10 pt-4 mt-auto">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-white/60">{testimonial.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
