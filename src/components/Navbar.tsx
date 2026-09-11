import { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const NAV_LINKS = [
  { label: 'ปัญหา', href: '#problem' },
  { label: 'วิธีการแก้', href: '#solution' },
  { label: 'ฟีเจอร์', href: '#features' },
  { label: 'มาตรฐาน', href: '#standards' },
  { label: 'ทีม', href: '#team' },
  { label: 'ติดต่อ', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-brand-500/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }} className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center glow-cyan transition-transform duration-300 group-hover:scale-110">
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-white text-sm tracking-wide">FORGE</span>
            <span className="font-display text-brand-400 text-[10px] tracking-[0.15em] font-medium">SOLUTIONS LAB</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm font-medium text-ink-300 hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-400 rounded-full transition-all duration-300 group-hover:w-6" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('#contact')}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg hover:shadow-lg hover:shadow-brand-500/30 hover:scale-105 transition-all duration-300"
          >
            นัดหมายสาธิตระบบ
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white rounded-lg hover:bg-ink-800 transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <div className="px-6 pb-4 flex flex-col gap-1 bg-ink-900/95 backdrop-blur-xl rounded-2xl mx-4 border border-brand-500/10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-3 text-left text-sm font-medium text-ink-200 hover:text-brand-400 hover:bg-ink-800 rounded-lg transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg text-center"
          >
            นัดหมายสาธิตระบบ
          </button>
        </div>
      </div>
    </header>
  );
}
