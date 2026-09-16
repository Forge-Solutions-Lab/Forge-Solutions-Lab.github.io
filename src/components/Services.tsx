import { useState } from 'react';
import { Cpu, GitBranch, Database, Bot, Check, ArrowRight, Layers, Binary, ShieldCheck, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const SERVICES = [
  {
    id: '01',
    title: 'Machine Learning Model Development',
    category: 'Predictive & Optimization',
    icon: Cpu,
    tagline: 'Well-Posed Learning Problem Framework (T-P-E)',
    description:
      'ออกแบบ พัฒนา และเทรนโมเดล Machine Learning เฉพาะทางสำหรับโจทย์ธุรกิจ โดยยึดกรอบแนวคิด Task, Performance Metric, และ Experience Stream ทำให้ทุกโมเดลมีเป้าหมายที่ชัดเจน วัดผล ROI ได้ และพัฒนาตนเองได้อย่างเป็นระบบ',
    capabilities: [
      'Supervised & Unsupervised Learning Architecture',
      'Feature Engineering & High-dimensional Embeddings',
      'Performance Optimization & Continuous Evaluation',
      'Model Drift Monitoring & Active Retraining',
    ],
    accent: 'brand',
  },
  {
    id: '02',
    title: 'Concept Learning & Rule-Based Decision Systems',
    category: 'Inductive Logic & Heuristics',
    icon: Binary,
    tagline: 'Find-S, Candidate Elimination & Version Space Theory',
    description:
      'สร้างกลไกการตัดสินใจและคัดกรองเงื่อนไขทางธุรกิจที่เรียนรู้ขอบเขต "แนวคิด" จากตัวอย่างเชิงบวกและเชิงลบจริง สอดคล้องกับทฤษฎี Version Space และ General-to-Specific Ordering เหมาะสำหรับการคัดกรอง Alert และการสร้างกฎ SLA อัตโนมัติที่แม่นยำสูง',
    capabilities: [
      'Hypothesis Space & Version Space Maintenance',
      'Find-S & Candidate Elimination Heuristics',
      'Adaptive SLA Threshold & Anomaly Boundaries',
      'Explainable AI & Transparent Decision Rules',
    ],
    accent: 'accent',
  },
  {
    id: '03',
    title: 'Data Engineering & Pipeline (Medallion Architecture)',
    category: 'Data Infrastructure & ETL',
    icon: Database,
    tagline: 'Bronze &rarr; Silver &rarr; Gold Data Lakehouse Pattern',
    description:
      'วางรากฐานสถาปัตยกรรมข้อมูลขนาดใหญ่ที่รองรับข้อมูลสตรีมมิ่งระดับล้านเรคคอร์ดต่อวัน แบ่งชั้นข้อมูลเป็น Bronze (Raw Logs Ingestion), Silver (Cleaned & Validated), และ Gold (Business-Ready Metrics) เพื่อความถูกต้องและพร้อมใช้งานสูงสุด',
    capabilities: [
      'Multi-layer Medallion Data Processing Pipeline',
      'Real-time IoT & Server Log Stream Ingestion',
      'Automated Data Quality & Schema Validation',
      'High-throughput Analytical Data Modeling',
    ],
    accent: 'brand',
  },
  {
    id: '04',
    title: 'AI Agent, RAG & Autonomous Automation',
    category: 'Agentic Workflow & GenAI',
    icon: Bot,
    tagline: 'Retrieval-Augmented Generation & Text-to-SQL Systems',
    description:
      'พัฒนาระบบ AI Agent อัจฉริยะที่สามารถสืบค้นฐานความรู้ขององค์กร (RAG) แปลงคำสั่งภาษาธรรมชาติเป็นแบบสอบถามข้อมูล (Text-to-SQL) และดำเนินการตอบสนองทางธุรกิจอัตโนมัติ โดยผสานระบบ Human-in-the-Loop เพื่อความปลอดภัยสูงสุด',
    capabilities: [
      'Hybrid Retrieval-Augmented Generation (RAG)',
      'Enterprise Text-to-SQL Knowledge Engine',
      'Human-in-the-Loop Approval & Policy Governance',
      'Autonomous Alert-to-Action Dispatch Workflows',
    ],
    accent: 'accent',
  },
];

export default function Services() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [selectedService, setSelectedService] = useState(0);

  return (
    <section id="services" className="relative py-28 border-t border-white/[0.06] bg-ink-950 overflow-hidden">
      {/* Precision grid backdrop */}
      <div className="absolute inset-0 grid-bg-enterprise opacity-30" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
            <span className="font-mono text-xs font-semibold text-accent-300 tracking-wider uppercase">
              SERVICES &amp; CORE CAPABILITIES
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            โซลูชันวิศวกรรมข้อมูลและ AI{' '}
            <span className="text-gradient-cyan">ระดับองค์กร</span>
          </h2>
          <p className="reveal reveal-delay-2 text-ink-300 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            ผสานทฤษฎี Machine Learning เชิงลึกเข้ากับสถาปัตยกรรมข้อมูลระดับ Enterprise เพื่อสร้างผลลัพธ์ทางธุรกิจที่พิสูจน์ได้
          </p>
        </div>

        {/* 2x2 Structured Capabilities Matrix */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isBrand = service.accent === 'brand';
            return (
              <div
                key={service.id}
                className={`reveal reveal-delay-${(index % 2) + 1} glass-card rounded-2xl p-8 flex flex-col justify-between border-glow-hover relative overflow-hidden group`}
              >
                {/* Accent Top Border Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] ${
                    isBrand
                      ? 'bg-gradient-to-r from-transparent via-brand-400 to-transparent'
                      : 'bg-gradient-to-r from-transparent via-accent-400 to-transparent'
                  }`}
                />

                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                    <span className="font-mono text-xs font-bold text-ink-400 tracking-widest">
                      SERVICE #{service.id}
                    </span>
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] text-ink-300 border border-white/[0.06]">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 ${
                        isBrand
                          ? 'bg-brand-500/10 border border-brand-500/20 text-brand-400'
                          : 'bg-accent-500/10 border border-accent-500/20 text-accent-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-200 transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="font-mono text-xs text-brand-400/90 mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-ink-300 leading-relaxed mt-4 mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Capabilities Checklist */}
                <div className="pt-5 border-t border-white/[0.06] space-y-2.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-400 font-semibold block mb-2">
                    Key Technical Deliverables
                  </span>
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2.5 text-xs text-ink-200">
                      <div className="w-4 h-4 rounded-full bg-white/[0.05] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-brand-400" />
                      </div>
                      <span className="font-mono">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
