import { useScrollReveal } from '@/hooks/useScrollReveal';

const MEMBERS = [
  {
    ru: 'RU-05',
    name: 'พงษ์ดนัย สมภาร',
    sid: '6752301255',
    role: 'Data Lead',
    photo: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    ru: 'RU-04',
    name: 'ชรัฐภูมิ หวังเดช',
    sid: '6752301336',
    role: 'CTO',
    photo: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    ru: 'RU-03',
    name: 'ธีรภัทร ทองตำลึง',
    sid: '6752300194',
    role: 'CEO',
    photo: 'https://images.pexels.com/photos/16825855/pexels-photo-16825855.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    ru: 'RU-02',
    name: 'ถวายเกียรติ ปูวัง',
    sid: '6752301271',
    role: 'AI Engineer',
    photo: 'https://images.pexels.com/photos/38740728/pexels-photo-38740728.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    ru: 'RU-01',
    name: 'จิมมี่ โกรสเฮียรว์',
    sid: '6752300658',
    role: 'ML Engineer',
    photo: 'https://images.pexels.com/photos/5514779/pexels-photo-5514779.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
];

export default function Team() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="team" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-500/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span className="text-xs font-medium text-brand-300 tracking-wide uppercase">Team</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-4xl font-bold text-white leading-tight">
            สมาชิกในทีม
          </h2>
          <p className="reveal reveal-delay-2 text-sm text-ink-400 mt-3 font-mono">TEAM RACK — TR-01</p>
        </div>

        {/* Rack */}
        <div className="reveal reveal-delay-2">
          <div className="flex items-stretch bg-ink-900 border border-ink-600 rounded-2xl overflow-hidden">
            {/* Left rail */}
            <div className="hidden sm:block flex-shrink-0 w-5 border-l border-r border-ink-600"
              style={{
                backgroundImage: 'radial-gradient(circle, #453a2d 2px, transparent 2.4px)',
                backgroundSize: '100% 46px',
                backgroundPosition: '50% 23px',
              }}
            />

            {/* Units */}
            <div className="flex-1 min-w-0">
              {MEMBERS.map((member, i) => (
                <div
                  key={member.sid}
                  className="flex items-center gap-4 md:gap-5 px-5 py-4 border-b border-ink-600 last:border-b-0 transition-colors duration-200 hover:bg-brand-500/5 group"
                  style={{
                    animation: `fadeUp 0.5s ease-out ${0.15 + i * 0.15}s both`,
                  }}
                >
                  {/* LED */}
                  <span
                    className="flex-shrink-0 w-2 h-2 rounded-full bg-accent-400"
                    style={{
                      boxShadow: '0 0 7px #57d68d',
                      animation: `fadeIn 0.4s ease ${0.3 + i * 0.15}s both`,
                    }}
                  />

                  {/* RU code */}
                  <span className="hidden md:block flex-shrink-0 text-xs font-mono text-ink-400 w-12">
                    {member.ru}
                  </span>

                  {/* Photo */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="flex-shrink-0 w-14 h-14 object-cover border border-ink-500 rounded-sm"
                    style={{ filter: 'grayscale(55%) sepia(18%) contrast(1.02)' }}
                  />

                  {/* Name + ID */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white truncate">{member.name}</h3>
                    <p className="text-xs font-mono text-ink-400 mt-0.5">{member.sid}</p>
                  </div>

                  {/* Role badge */}
                  <span className="flex-shrink-0 text-[10px] md:text-xs font-mono text-brand-400 border border-brand-400/30 px-2.5 py-1 rounded whitespace-nowrap">
                    {member.role}
                  </span>
                </div>
              ))}
            </div>

            {/* Right rail */}
            <div className="hidden sm:block flex-shrink-0 w-5 border-l border-r border-ink-600"
              style={{
                backgroundImage: 'radial-gradient(circle, #453a2d 2px, transparent 2.4px)',
                backgroundSize: '100% 46px',
                backgroundPosition: '50% 23px',
              }}
            />
          </div>
        </div>

        {/* Rack footer */}
        <div className="reveal reveal-delay-3 flex justify-between items-center mt-5 text-xs font-mono text-ink-400">
          <span>Forge-Solutions-Lab</span>
          <span>Rack TR-01 — 5 units installed</span>
        </div>
      </div>
    </section>
  );
}
