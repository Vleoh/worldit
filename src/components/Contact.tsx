import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Contacto
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9C4CA1] focus:ring focus:ring-[#9C4CA1] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9C4CA1] focus:ring focus:ring-[#9C4CA1] focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9C4CA1] focus:ring focus:ring-[#9C4CA1] focus:ring-opacity-50"
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
    </section>
  );
}