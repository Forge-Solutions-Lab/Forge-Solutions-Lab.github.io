import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Sun, Moon, Github } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

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
  const { theme, toggleTheme } = useTheme();

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
          ? 'bg-background/85 backdrop-blur-xl border-b border-border py-3.5 shadow-lg shadow-black/5 dark:shadow-black/40'
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
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center border border-brand-400/30 shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-foreground text-base tracking-tight">FORGE</span>
            <span className="font-mono text-brand-600 dark:text-brand-400 text-[10px] tracking-[0.2em] uppercase font-semibold">SOLUTIONS LAB</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1.5 glass-pill px-4 py-1.5 rounded-full">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-3.5 py-1.5 text-xs font-medium text-muted hover:text-foreground rounded-full transition-all duration-150 hover:bg-surface-muted"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Action Button, GitHub Link & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* GitHub Org Link */}
          <a
            href="https://github.com/Forge-Solutions-Lab"
            target="_blank"
            rel="noreferrer"
            aria-label="Forge Solutions Lab GitHub Organization"
            className="w-9 h-9 rounded-lg glass-pill flex items-center justify-center text-muted hover:text-foreground hover:border-brand-500/30 transition-all duration-200"
            title="ไปที่ GitHub Organization"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg glass-pill flex items-center justify-center text-muted hover:text-foreground hover:border-brand-500/30 transition-all duration-200"
            title={theme === 'dark' ? 'สลับเป็นธีมสว่าง (Light Mode)' : 'สลับเป็นธีมมืด (Dark Mode)'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-brand-600 hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Consultation CTA */}
          <button
            onClick={() => handleNavClick('#contact')}
            className="group px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 rounded-lg hover:from-brand-500 hover:to-brand-400 transition-all duration-200 shadow-md shadow-brand-500/20 flex items-center gap-1.5 ml-1"
          >
            <span>ติดต่อ / ปรึกษาโซลูชัน</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile toggles */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="https://github.com/Forge-Solutions-Lab"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Organization"
            className="w-9 h-9 flex items-center justify-center text-muted rounded-lg glass-pill hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center text-muted rounded-lg glass-pill hover:text-foreground transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-brand-600" />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="w-9 h-9 flex items-center justify-center text-muted rounded-lg glass-pill hover:text-foreground transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-border bg-surface/95 backdrop-blur-2xl px-6 py-4 animate-fade-in shadow-xl">
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2.5 text-left text-sm font-medium text-muted hover:text-foreground hover:bg-surface-muted rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 rounded-lg text-center shadow-md"
            >
              ติดต่อ / ปรึกษาโซลูชัน
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
