import { Server, Filter, Brain, Mail, ArrowRight, ArrowDown, Database, GitBranch, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FLOW_STEPS = [
  {
    icon: Server,
    label: 'ตู้ Rack (IoT)',
    sublabel: 'Raw Logs / Sensors',
    description: 'ข้อมูลดิบจากตู้ Rack ทุกตู้ — อุณหภูมิ ความชื้น ไฟ และ Logs',
    color: 'text-brand-400',
    bg: 'bg-brand-500/15',
    borderColor: 'border-brand-400/20',
  },
  {
    icon: GitBranch,
    label: 'Medallion Pipeline',
    sublabel: 'Bronze → Silver → Gold',
    description: 'เปลี่ยน Raw Logs ให้เป็นข้อมูลพร้อมใช้งาน ผ่าน 3 Layer แบบ Medallion Architecture',
    color: 'text-accent-400',
    bg: 'bg-accent-500/15',
    borderColor: 'border-accent-400/20',
  },
  {
    icon: Brain,
    label: 'AI Analysis',
    sublabel: 'RAG & Text-to-SQL',
    description: 'AI วิเคราะห์กฎทางธุรกิจ (SLA Thresholds) และสร้างคำสั่งดึงข้อมูลอัตโนมัติ',
    color: 'text-amber-400',
    bg: 'bg-amber-500/15',
    borderColor: 'border-amber-400/20',
  },
  {
    icon: Mail,
    label: 'ส่ง Email หาลูกค้า',
    sublabel: 'Auto Ticket Email',
    description: 'AI ร่างอีเมลแจ้งเตือนลูกค้าอย่างเป็นทางการ พร้อมคำแนะนำเชิงวิศวกรรมโดยอัตโนมัติ',
    color: 'text-brand-400',
    bg: 'bg-brand-500/15',
    borderColor: 'border-brand-400/20',
  },
];

const SOLUTION_DETAILS = [
  {
    number: '01',
    icon: Database,
    title: 'Smart Data Pipeline (Medallion Architecture)',
    description: 'เปลี่ยน Raw Logs ที่ยุ่งเหยิงให้เป็นข้อมูลพร้อมใช้งาน (Bronze → Silver → Gold Layer) ทำให้ระบบสามารถดึงสถิติรายลูกค้าได้อย่างรวดเร็วและแม่นยำ',
    points: ['Bronze: Raw Data Ingestion', 'Silver: Cleaned & Validated', 'Gold: Business-ready Analytics'],
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
  },
  {
    number: '02',
    icon: Brain,
    title: 'AI-Powered Text-to-SQL & RAG',
    description: 'วิเคราะห์ข้อมูลด้วยกฎทางธุรกิจ (SLA Thresholds) เช่น อุณหภูมิเกิน 35°C 3 ครั้ง/วัน ระบบจะวิเคราะห์ความรุนแรงและสร้างคำสั่งดึงข้อมูลอัตโนมัติ',
    points: ['RAG: Retrieval-Augmented Generation', 'Text-to-SQL: แปลงคำถามเป็น SQL', 'SLA Threshold Rules Engine'],
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
  },
  {
    number: '03',
    icon: Mail,
    title: 'Automated Email Ticketing',
    description: 'ใช้ AI ร่างอีเมลแจ้งเตือนลูกค้าอย่างเป็นทางการ พร้อมคำแนะนำเชิงวิศวกรรม (เช่น การเพิ่มสเปคระบายความร้อน) โดยอัตโนมัติ',
    points: ['AI-Generated Email Content', 'Engineering Recommendations', 'Multi-recipient Support'],
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
];

export default function Solution() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="solution" className="relative py-24 bg-ink-900/40 overflow-hidden">
      <div className="absolute inset-0 grid-bg-fine opacity-20" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
            <span className="text-xs font-medium text-accent-400 tracking-wide uppercase">Our Solution</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            ยกระดับการทำงานด้วย
            <span className="text-gradient-cyan"> Automated Ticket Generation Engine</span>
          </h2>
          <p className="reveal reveal-delay-2 text-lg text-ink-300 mt-5">
            ระบบของเราเปลี่ยนข้อมูลดิบให้เป็นการแจ้งเตือนเชิงรุกแบบอัตโนมัติ
            ด้วยสถาปัตยกรรมข้อมูลชั้นเลิศและเทคโนโลยี AI
          </p>
        </div>

        {/* Flowchart Diagram */}
        <div className="reveal reveal-delay-2 mb-20">
          <div className="glass rounded-2xl p-8 md:p-10">
            <p className="text-center text-xs font-medium text-ink-400 uppercase tracking-wider mb-8">Data Flow: จากตู้ Rack ถึงลูกค้า</p>

            {/* Desktop horizontal flow */}
            <div className="hidden lg:flex items-center justify-between gap-2">
              {FLOW_STEPS.map((step, i) => (
                <div key={step.label} className="flex items-center flex-1">
                  <div className={`group relative flex flex-col items-center text-center flex-1 p-5 rounded-xl ${step.bg} border ${step.borderColor} transition-all duration-500 hover:scale-105`}>
                    <div className={`w-14 h-14 rounded-xl bg-ink-800/80 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className={`w-7 h-7 ${step.color}`} />
                    </div>
                    <p className="font-display text-sm font-semibold text-white">{step.label}</p>
                    <p className="text-[10px] text-ink-400 mt-1 font-mono">{step.sublabel}</p>
                  </div>
                  {i < FLOW_STEPS.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-ink-500 mx-1 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile vertical flow */}
            <div className="lg:hidden flex flex-col gap-3">
              {FLOW_STEPS.map((step, i) => (
                <div key={step.label}>
                  <div className={`group relative flex items-center gap-4 p-4 rounded-xl ${step.bg} border ${step.borderColor}`}>
                    <div className="w-12 h-12 rounded-xl bg-ink-800/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-white">{step.label}</p>
                      <p className="text-[10px] text-ink-400 font-mono">{step.sublabel}</p>
                    </div>
                  </div>
                  {i < FLOW_STEPS.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-5 h-5 text-ink-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Flow descriptions */}
            <div className="grid md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5">
              {FLOW_STEPS.map((step, i) => (
                <p key={i} className="text-xs text-ink-300 leading-relaxed text-center">
                  {step.description}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Solution detail cards */}
        <div className="space-y-6">
          {SOLUTION_DETAILS.map((detail, i) => (
            <div
              key={detail.number}
              className={`reveal reveal-delay-${(i % 3) + 1} group flex flex-col md:flex-row gap-6 p-7 rounded-2xl glass hover:border-brand-400/20 transition-all duration-500`}
            >
              {/* Number + Icon */}
              <div className="flex items-center gap-4 md:flex-col md:items-center md:w-32 flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl ${detail.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <detail.icon className={`w-8 h-8 ${detail.color}`} />
                </div>
                <span className="font-display text-3xl font-bold text-ink-700 group-hover:text-ink-500 transition-colors duration-300">
                  {detail.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-white mb-2">{detail.title}</h3>
                <p className="text-sm text-ink-300 leading-relaxed mb-4">{detail.description}</p>
                <div className="flex flex-wrap gap-2">
                  {detail.points.map((point) => (
                    <span key={point} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ink-800/50 border border-white/5 text-xs text-ink-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-400" />
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
