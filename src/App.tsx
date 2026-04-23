import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import ServiceShowcase from './components/ServiceShowcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--page-text)]">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Clients />
        <Services />
        <ServiceShowcase />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
