import { Clock, AlertTriangle, Database } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PROBLEMS = [
  {
    icon: Clock,
    emoji: '⏳',
    title: 'Manual Bottleneck',
    description: 'ทีม Ops เสียเวลาหลายชั่วโมงต่อวันในการดึงข้อมูลดิบ และนั่งนับจำนวน Alert ของตู้ Rack แต่ละตู้ด้วยตัวเอง',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'hover:border-amber-400/20',
  },
  {
    icon: AlertTriangle,
    emoji: '🐢',
    title: 'SLA Delay & Reactive Service',
    description: 'กว่าจะรู้ว่าอุณหภูมิเกินหรือไฟตก ก็เกิดผลกระทบไปแล้ว ลูกค้าไม่ได้รับการแจ้งเตือนล่วงหน้า (Proactive) ทำให้ความพึงพอใจลดลง',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'hover:border-red-400/20',
  },
  {
    icon: Database,
    emoji: '🧩',
    title: 'Data Disconnection',
    description: 'ข้อมูล Raw Logs มหาศาล กระจัดกระจาย นำมาวิเคราะห์เพื่อสื่อสารทางธุรกิจได้ยากและเสี่ยงต่อความผิดพลาด',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    border: 'hover:border-brand-400/20',
  },
];

export default function Problem() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="problem" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-500/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="text-xs font-medium text-red-300 tracking-wide uppercase">Pain Points</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            คุณกำลังเผชิญกับปัญหาเหล่านี้
            <br />
            <span className="text-gradient-cyan">ใน Data Center อยู่หรือไม่?</span>
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, i) => (
            <div
              key={problem.title}
              className={`reveal reveal-delay-${i + 1} group relative p-7 rounded-2xl glass border border-white/5 ${problem.border} transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Emoji + Icon */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-14 h-14 rounded-xl ${problem.bg} flex items-center justify-center text-2xl`}>
                  {problem.emoji}
                </div>
                <div className={`w-10 h-10 rounded-lg ${problem.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className={`w-5 h-5 ${problem.color}`} />
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-sm text-ink-300 leading-relaxed">{problem.description}</p>

              {/* Hover gradient line */}
              <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
