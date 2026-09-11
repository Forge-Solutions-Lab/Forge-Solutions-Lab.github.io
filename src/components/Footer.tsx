import { Zap, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const FOOTER_LINKS = {
  'ผลิตภัณฑ์': ['ฟีเจอร์', 'วิธีการทำงาน', 'มาตรฐาน', 'API Docs'],
  'บริษัท': ['เกี่ยวกับเรา', 'ร่วมงาน', 'บล็อก', 'พาร์ทเนอร์'],
  'แหล่งข้อมูล': ['เอกสาร', 'Knowledge Base', 'Status Page', 'Security'],
  'นโยบาย': ['นโยบายความเป็นส่วนตัว', 'เงื่อนไขการใช้งาน', 'Cookie Policy', 'SLA'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-brand-500/10 bg-ink-950 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-brand-400/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="grid lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center glow-cyan transition-transform duration-300 group-hover:scale-110">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-sm tracking-wide">FORGE</span>
                <span className="font-display text-brand-400 text-[10px] tracking-[0.15em] font-medium">SOLUTIONS LAB</span>
              </div>
            </a>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              ระบบ Gen Ticket สำหรับ Data Center Datalog &amp; Ticket Automation — AI Proactive Support
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-ink-300 hover:text-brand-400 hover:border-brand-400/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-white mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-ink-400 hover:text-brand-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-ink-400">
            &copy; {new Date().getFullYear()} Forge Solutions Lab. สงวนลิขสิทธิ์ทุกประการ
          </p>
          <div className="flex items-center gap-2 text-xs text-ink-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
            </span>
            ระบบทำงานปกติ
          </div>
        </div>
      </div>
    </footer>
  );
}
