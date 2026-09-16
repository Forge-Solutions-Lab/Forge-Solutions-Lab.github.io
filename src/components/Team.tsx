import { useState } from 'react';
import { Server, GraduationCap, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const MEMBERS = [
  {
    ru: 'RU-03',
    sid: '6752300194',
    name: 'ธีรภัทร ทองตำลึง',
    role: 'Chief Executive Officer (CEO)',
    specialty: 'Strategy & System Architecture',
    photo: 'https://images.pexels.com/photos/16825855/pexels-photo-16825855.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    ru: 'RU-04',
    sid: '6752301336',
    name: 'ชรัฐภูมิ หวังเดช',
    role: 'Chief Technology Officer (CTO)',
    specialty: 'AI Architecture & Infrastructure',
    photo: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    ru: 'RU-05',
    sid: '6752301255',
    name: 'พงษ์ดนัย สมภาร',
    role: 'Data Engineering Lead',
    specialty: 'Medallion Pipelines & Big Data Ops',
    photo: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    ru: 'RU-02',
    sid: '6752301271',
    name: 'ถวายเกียรติ ปูวัง',
    role: 'Lead AI Engineer',
    specialty: 'Concept Learning & RAG Systems',
    photo: 'https://images.pexels.com/photos/38740728/pexels-photo-38740728.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    ru: 'RU-01',
    sid: '6752300658',
    name: 'จิมมี่ โกรสเฮียรว์',
    role: 'Senior ML Engineer',
    specialty: 'Model Evaluation & Optimization',
    photo: 'https://images.pexels.com/photos/5514779/pexels-photo-5514779.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
];

export default function Team() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [academicMode, setAcademicMode] = useState(false);

  return (
    <section id="team" className="relative py-28 border-t border-white/[0.06] bg-ink-950/70 overflow-hidden">
      {/* Precision grid backdrop */}
      <div className="absolute inset-0 grid-bg-enterprise opacity-30" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header with Academic Mode Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
              <span className="font-mono text-xs font-semibold text-accent-300 tracking-wider uppercase">
                ENGINEERING LEADERSHIP
              </span>
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              ทีมวิศวกรและผู้บริหาร{' '}
              <span className="text-gradient">Forge Solutions Lab</span>
            </h2>
            <p className="reveal reveal-delay-2 text-ink-300 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
              ทีมวิศวกรผู้เชี่ยวชาญด้าน Machine Learning, Data Architecture และ Cloud Solutions ที่พร้อมผลักดันนวัตกรรมองค์กรของคุณ
            </p>
          </div>

          {/* Academic Mode Toggle Switch */}
          <div className="reveal reveal-delay-2 self-start md:self-end">
            <button
              onClick={() => setAcademicMode(!academicMode)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs transition-all duration-200 border ${
                academicMode
                  ? 'bg-brand-500/20 text-brand-300 border-brand-500/40 shadow-lg shadow-brand-500/20 font-semibold'
                  : 'bg-ink-900/80 hover:bg-ink-800 text-ink-300 border-white/[0.08]'
              }`}
              title="สลับโหมดเพื่อแสดงรหัสนักศึกษาสำหรับตรวจงานวิชาการ"
            >
              <GraduationCap className={`w-4 h-4 ${academicMode ? 'text-brand-400' : 'text-ink-400'}`} />
              <span>{academicMode ? 'Academic View: ON' : 'Academic View (Show Student IDs)'}</span>
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  academicMode ? 'bg-brand-400 animate-pulse' : 'bg-ink-600'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Executive Engineering Roster - Structured List */}
        <div className="reveal reveal-delay-2 glass-card rounded-3xl p-6 sm:p-8 border-glow-hover">
          {/* Rack Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08] font-mono text-xs text-ink-400">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-brand-400" />
              <span className="text-white font-semibold">ENGINEERING CLUSTER TR-01</span>
            </div>
            <div className="flex items-center gap-3">
              {academicMode && (
                <span className="text-brand-300 font-mono text-[11px] px-2 py-0.5 rounded bg-brand-500/10 border border-brand-500/20 animate-fade-in">
                  STUDENT ID VERIFIED
                </span>
              )}
              <span className="text-accent-400">5 ACTIVE UNITS INSTALLED</span>
            </div>
          </div>

          {/* Members Stack */}
          <div className="space-y-3">
            {MEMBERS.map((member) => (
              <div
                key={member.ru}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-ink-900/50 border border-white/[0.04] hover:border-brand-500/20 hover:bg-ink-900/80 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  {/* Status Indicator & RU */}
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent-400 shadow-sm shadow-accent-400 flex-shrink-0" />
                    <span className="font-mono text-xs font-bold text-brand-400 w-12 flex-shrink-0">
                      {member.ru}
                    </span>
                  </div>

                  {/* Photo */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-xl object-cover border border-white/[0.1] group-hover:border-brand-400/40 transition-colors flex-shrink-0"
                  />

                  {/* Info */}
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-bold text-white text-base group-hover:text-brand-200 transition-colors">
                        {member.name}
                      </h3>
                      {academicMode && (
                        <span className="font-mono text-xs text-brand-300 bg-brand-500/10 border border-brand-500/25 px-2.5 py-0.5 rounded animate-fade-in font-medium">
                          ID: {member.sid}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-ink-400 font-sans mt-0.5">{member.specialty}</p>
                  </div>
                </div>

                {/* Role Badge */}
                <div className="flex items-center gap-3 self-end sm:self-center">
                  <span className="font-mono text-xs px-3 py-1 rounded-lg bg-ink-950 text-brand-300 border border-white/[0.06] whitespace-nowrap">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Cluster Footer */}
          <div className="flex flex-wrap items-center justify-between pt-5 mt-4 border-t border-white/[0.06] font-mono text-[11px] text-ink-400">
            <span>FORGE SOLUTIONS LAB &middot; TALENT POOL</span>
            <span>DATA CENTER &middot; AI LAB DEPLOYMENT READY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
