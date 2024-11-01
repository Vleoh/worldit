import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Martín Rodriguez",
      company: "Tech Solutions BA",
      text: "Excelente trabajo en la instalación de nuestra red. Super profesionales y detallistas. ¡Los super recomiendo!",
      rating: 5
    },
    {
      name: "Laura Fernández",
      company: "Consultora Digital",
      text: "La mejor decisión que tomamos fue contratar a WORLD IT. Transformaron completamente nuestra infraestructura.",
      rating: 5
    },
    {
      name: "Carlos Gutiérrez",
      company: "Startup Hub Palermo",
      text: "Increíble servicio y atención. Resolvieron todos nuestros problemas de conectividad. ¡Un golazo!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}