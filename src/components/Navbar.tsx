import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 h-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            {/* <span className="text-2xl font-bold text-[#9C4CA1]">WORLD IT</span> */}
            <img src="../img/wit.png"  alt="logo" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-[#20B24D] text-lg">Servicios</a>
            <a href="#about" className="text-gray-700 hover:text-[#20B24D] text-lg">Nosotros</a>
            <a href="#clients" className="text-gray-700 hover:text-[#20B24D] text-lg">Clientes</a>
            <a href="#contact" className="text-gray-700 hover:text-[#20B24D] text-lg">Contacto</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-[#20B24D]">Servicios</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-[#20B24D]">Nosotros</a>
            <a href="#clients" className="block px-3 py-2 text-gray-700 hover:text-[#20B24D]">Clientes</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-[#20B24D]">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}