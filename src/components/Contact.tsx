import { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram, Facebook, MessageCircle, Shield } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xrbgpljq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Mensaje enviado con exito');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al enviar el mensaje');
    }
  };

  return (
    <section id="contact" className="relative bg-gray-950 text-white overflow-hidden">
      <ToastContainer />
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at bottom right, #20B24D20, transparent 55%)' }} />
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-2xl text-center mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#20B24D]">Hablemos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6">
            Agenda una demo personalizada con nuestros especialistas
          </h2>
          <p className="text-white/70 mt-4">
            Cuentanos que necesitas proteger y armamos un roadmap de seguridad inteligente con indicadores de ROI claros para tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-[#20B24D]/10 flex items-center justify-center text-[#20B24D]">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Tiempo promedio de respuesta</p>
                <p className="text-lg font-semibold">Menos de 30 min</p>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              Preferimos conversaciones con foco en resultados. Cada proyecto comienza con un diagnostico guiado y un plan de accion claro.
            </p>
            <div className="space-y-5">
              <a href="mailto:info@worldit.com.ar" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Mail size={20} />
                info@worldit.com.ar
              </a>
              <a href="https://wa.me/+541155990107" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <MessageCircle size={20} />
                WhatsApp directo
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <Phone size={20} />
                <span>+54 11 5599 0107</span>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/world.it_?igsh=MXdlbWI2MzlzaGJnMQ==" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/p/World-it-100083622613322/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:border-[#5325c7] focus:ring focus:ring-[#5325c7]/20"
                    placeholder="Ej: Sofia Gomez"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:border-[#5325c7] focus:ring focus:ring-[#5325c7]/20"
                    placeholder="empresa@correo.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 block w-full rounded-xl border border-gray-200 px-4 py-3 shadow-sm focus:border-[#5325c7] focus:ring focus:ring-[#5325c7]/20"
                  placeholder="Cuentanos sobre tus ubicaciones, horarios y nivel de riesgo."
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#5325c7] to-[#20B24D] text-white px-6 py-4 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>

        <footer className="mt-20 border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>Copyright 2024 WORLD IT. Seguridad inteligente para empresas que no se detienen.</p>
        </footer>
      </div>
    </section>
  );
}
