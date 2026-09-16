import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

const NAV_LINKS = [
  { label: 'เกี่ยวกับเรา', href: '#about' },
  { label: 'บริการ & ความเชี่ยวชาญ', href: '#services' },
  { label: 'ผลงาน & Case Studies', href: '#projects' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'ทีมวิศวกร', href: '#team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center border border-brand-400/30 shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-white text-base tracking-tight">FORGE</span>
            <span className="font-mono text-brand-400 text-[10px] tracking-[0.2em] uppercase font-semibold">SOLUTIONS LAB</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1.5 glass-pill px-4 py-1.5 rounded-full">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-3.5 py-1.5 text-xs font-medium text-ink-300 hover:text-white rounded-full transition-all duration-150 hover:bg-white/[0.04]"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('#contact')}
            className="group px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 rounded-lg hover:from-brand-500 hover:to-brand-400 transition-all duration-200 shadow-md shadow-brand-500/20 flex items-center gap-1.5"
          >
            <span>ติดต่อ / ปรึกษาโซลูชัน</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden w-10 h-10 flex items-center justify-center text-ink-200 rounded-lg glass-pill hover:text-white transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-ink-950/95 backdrop-blur-2xl px-6 py-4 animate-fade-in">
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2.5 text-left text-sm font-medium text-ink-200 hover:text-brand-400 hover:bg-white/[0.03] rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 rounded-lg text-center"
            >
              ติดต่อ / ปรึกษาโซลูชัน
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
