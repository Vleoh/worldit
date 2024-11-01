import { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';
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
      // const response = await fetch('https://tu-backend-url.vercel.app/api/enviar-contacto', {
      const response = await fetch('https://formspree.io/f/xrbgpljq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Mensaje enviado con éxito');
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
    <section id="contact" className="bg-gray-50">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Contacto
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9C4CA1] focus:ring focus:ring-[#9C4CA1] focus:ring-opacity-50"
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
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9C4CA1] focus:ring focus:ring-[#9C4CA1] focus:ring-opacity-50"
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
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9C4CA1] focus:ring focus:ring-[#9C4CA1] focus:ring-opacity-50"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#9C4CA1] text-white px-6 py-3 rounded-md hover:bg-[#20B24D] transition-colors"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>

            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#9C4CA1]">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/world.it_?igsh=MXdlbWI2MzlzaGJnMQ==" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#9C4CA1]">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/p/World-it-100083622613322/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#9C4CA1]">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-6 mt-0">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-2">
            <Mail size={20} className="mr-1" />
            <span>info@worldit.com.ar</span>
          </div>
          <div className="flex items-center space-x-4 mb-2">
            <Phone size={20} className="mr-1" />
            <span>+541155990107</span>
          </div>
          <div className="text-center mt-2">
            <span>Copyright © 2024 WORLD IT</span>
          </div>
        </div>
      </footer>
    </section>
  );
}