import { Menu, Shield } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#services', label: 'Soluciones' },
  { href: '#about', label: 'Por que elegirnos' },
  { href: '#clients', label: 'Clientes' },
  { href: '#testimonials', label: 'Resultados' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <a href="#top" className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#5325c7] to-[#20B24D] flex items-center justify-center text-white">
              <Shield size={24} />
            </div>
            <div className="leading-tight">
              <p className="text-xl font-bold text-gray-900">WORLD IT</p>
              <p className="text-sm text-gray-500">Seguridad inteligente y redes empresariales</p>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-700 hover:text-[#5325c7] text-sm font-medium tracking-wide transition-colors">
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/+541155990107"
              className="bg-gradient-to-r from-[#5325c7] to-[#20B24D] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Agenda una demo
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-900 p-2" aria-label="Abrir menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-300 bg-white border-t border-gray-100`}>
        <div className="flex flex-col items-center py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#5325c7] text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/+541155990107"
            className="bg-gradient-to-r from-[#5325c7] to-[#20B24D] text-white px-6 py-2 rounded-full text-base font-semibold shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            Agenda una demo
          </a>
        </div>
      </div>
    </nav>
  );
}
