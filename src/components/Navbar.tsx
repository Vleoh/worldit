import { Menu, Shield, LogIn } from 'lucide-react';
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

  // ERP login URL configurable via Vite env.
  const ERP_URL = import.meta.env.VITE_ERP_URL || 'http://localhost:8080/login';
  const ERP_ORIGIN = (() => {
    try {
      return new URL(ERP_URL).origin;
    } catch {
      return 'http://localhost:8080';
    }
  })();
  const BRAND_LOGO =
    import.meta.env.VITE_BRAND_LOGO_URL ||
    `${ERP_ORIGIN}/assets/wit_brand/images/wit-logo.png`;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <a href="#top" className="flex items-center space-x-3">
            {BRAND_LOGO ? (
              <img src={BRAND_LOGO} alt="WORLD IT" className="h-12 w-auto" />
            ) : (
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#5325c7] to-[#20B24D] flex items-center justify-center text-white">
                <Shield size={24} />
              </div>
            )}
            <div className="leading-tight">
              <p className="text-xl font-bold text-gray-900"></p>
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
              href={ERP_URL}
              className="inline-flex items-center gap-2 text-[#5325c7] hover:text-[#3b1b93] text-sm font-semibold"
            >
              <LogIn size={18} /> Ingresar ERP
            </a>
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
            href={ERP_URL}
            className="inline-flex items-center gap-2 text-[#5325c7] hover:text-[#3b1b93] text-base font-semibold"
            onClick={() => setIsOpen(false)}
          >
            <LogIn size={18} /> Ingresar ERP
          </a>
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
