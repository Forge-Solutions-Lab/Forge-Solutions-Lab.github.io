import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import KeyFeatures from '@/components/KeyFeatures';
import TrustedStandards from '@/components/TrustedStandards';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-100 font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <KeyFeatures />
        <TrustedStandards />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
