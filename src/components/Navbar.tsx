import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 h-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            {/* <span className="text-2xl font-bold text-[#9C4CA1]">WORLD IT</span> */}
            <img src="/img/wit.png"  alt="logo" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-[#20B24D] text-lg">Servicios</a>
            <a href="#about" className="text-gray-700 hover:text-[#20B24D] text-lg">Nosotros</a>
            <a href="#clients" className="text-gray-700 hover:text-[#20B24D] text-lg">Clientes</a>
            <a href="#contact" className="text-gray-700 hover:text-[#20B24D] text-lg">Contacto</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'bg-white' : 'hidden'} transition-all`}>
        <div className="flex flex-col items-center">
          <a href="#services" className="text-gray-700 hover:text-[#20B24D] py-2">Servicios</a>
          <a href="#about" className="text-gray-700 hover:text-[#20B24D] py-2">Nosotros</a>
          <a href="#clients" className="text-gray-700 hover:text-[#20B24D] py-2">Clientes</a>
          <a href="#contact" className="text-gray-700 hover:text-[#20B24D] py-2">Contacto</a>
        </div>
      </div>
    </nav>
  );
}