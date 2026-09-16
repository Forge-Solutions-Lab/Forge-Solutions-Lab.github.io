import { Terminal, Github, Linkedin, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-ink-950 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center border border-brand-400/30">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-white text-base tracking-tight">FORGE</span>
                <span className="font-mono text-brand-400 text-[10px] tracking-[0.2em] uppercase font-semibold">SOLUTIONS LAB</span>
              </div>
            </div>
            <p className="text-sm text-ink-300 max-w-sm leading-relaxed">
              We Build Systems That Learn From Experience. เราออกแบบและพัฒนาโซลูชัน AI, Machine Learning และสถาปัตยกรรมข้อมูลขนาดใหญ่ที่ฉลาดขึ้นจากประสบการณ์จริง
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Forge-Solutions-Lab"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg glass-pill flex items-center justify-center text-ink-300 hover:text-white hover:border-white/[0.2] transition-colors"
                aria-label="GitHub Organization"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-sans text-ink-300">
              <li>
                <button onClick={() => scrollTo('#about')} className="hover:text-brand-300 transition-colors">
                  เกี่ยวกับเรา (About Us)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#services')} className="hover:text-brand-300 transition-colors">
                  บริการ &amp; ความเชี่ยวชาญ (Services)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#projects')} className="hover:text-brand-300 transition-colors">
                  ผลงาน &amp; สถาปัตยกรรม (Projects)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#tech-stack')} className="hover:text-brand-300 transition-colors">
                  เทคโนโลยี (Tech Stack)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#team')} className="hover:text-brand-300 transition-colors">
                  ทีมวิศวกร (Engineering Team)
                </button>
              </li>
            </ul>
          </div>

          {/* Technical Scope */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
              Core Competencies
            </div>
            <ul className="space-y-2 text-xs font-sans text-ink-400">
              <li>Machine Learning (T-P-E)</li>
              <li>Concept Learning &amp; Version Space</li>
              <li>Medallion Data Lakehouse</li>
              <li>Enterprise RAG &amp; Text-to-SQL</li>
              <li>Human-in-the-Loop Governance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-400">
          <div>
            &copy; 2026 Forge Solutions Lab. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-ink-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
