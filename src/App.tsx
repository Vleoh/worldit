import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import ServiceShowcase from './components/ServiceShowcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-text)]">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <ServiceShowcase />
        <Testimonials />
        <Clients />
        <Contact />
      </main>
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
