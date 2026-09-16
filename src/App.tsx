import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-100 font-body antialiased selection:bg-brand-500/25 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
