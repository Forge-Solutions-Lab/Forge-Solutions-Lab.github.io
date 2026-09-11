import { Layers, Cloud, BookOpen } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const STANDARDS = [
  {
    icon: Layers,
    title: 'Databricks Medallion Architecture',
    description: 'เพื่อความเสถียรสูงสุดในการประมวลผล Big Data — แบ่งข้อมูลเป็น Bronze, Silver, Gold Layer เพื่อความน่าเชื่อถือและ scalability',
    tag: 'Data Engineering',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    borderColor: 'hover:border-brand-400/20',
  },
  {
    icon: Cloud,
    title: 'AWS Generative AI Best Practices',
    description: 'ขับเคลื่อนด้วยสถาปัตยกรรม RAG ที่ปลอดภัยและแม่นยำ สอดคล้องกับแนวทางการใช้ GenAI บน AWS อย่างเป็นทางการ',
    tag: 'AI / ML',
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
    borderColor: 'hover:border-accent-400/20',
  },
  {
    icon: BookOpen,
    title: 'ITIL Framework',
    description: 'สอดคล้องกับมาตรฐานสากลในการจัดการ Incident & Ticket Management ทำให้กระบวนการทำงานเป็นระบบและตรวจสอบได้',
    tag: 'IT Service Management',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    borderColor: 'hover:border-amber-400/20',
  },
];

export default function TrustedStandards() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="standards" className="relative py-24 bg-ink-900/40 overflow-hidden">
      <div className="absolute inset-0 grid-bg-fine opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-xs font-medium text-amber-400 tracking-wide uppercase">Trusted Standards</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            มาตรฐานสากลที่
            <span className="text-gradient-cyan">เรารองรับ</span>
          </h2>
          <p className="reveal reveal-delay-2 text-lg text-ink-300 mt-5">
            ออกแบบและพัฒนาบนมาตรฐานวิศวกรรมระดับโลก
          </p>
        </div>

        {/* Standards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {STANDARDS.map((standard, i) => (
            <div
              key={standard.title}
              className={`reveal reveal-delay-${i + 1} group relative p-8 rounded-2xl glass border border-white/5 ${standard.borderColor} transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Tag */}
              <span className="inline-block text-[10px] font-mono text-ink-400 px-2.5 py-1 rounded-full bg-ink-800/50 border border-white/5 mb-5">
                {standard.tag}
              </span>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${standard.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <standard.icon className={`w-8 h-8 ${standard.color}`} />
              </div>

              <h3 className="font-display text-lg font-semibold text-white mb-3">{standard.title}</h3>
              <p className="text-sm text-ink-300 leading-relaxed">{standard.description}</p>

              {/* Hover gradient line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
