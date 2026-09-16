import { useState } from 'react';
import { Server, Layers, Brain, Mail, Terminal, Check, Github, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FLOW_STEPS = [
  {
    step: '01',
    title: 'IoT Sensor Ingestion',
    subtitle: 'Raw Datalogs',
    desc: 'สตรีมข้อมูลดิบจากเซนเซอร์ตู้ Rack ทุกตู้ (อุณหภูมิ, ความชื้น, การใช้พลังงาน, บันทึกไฟตก)',
    icon: Server,
  },
  {
    step: '02',
    title: 'Medallion Data Pipeline',
    subtitle: 'Bronze → Silver → Gold',
    desc: 'กลั่นกรองและทำความสะอาดข้อมูลดิบให้พร้อมวิเคราะห์ทางสถิติระดับ Real-time',
    icon: Layers,
  },
  {
    step: '03',
    title: 'AI Analysis & RAG',
    subtitle: 'Text-to-SQL + Rules',
    desc: 'AI ประเมินข้อตกลง SLA และสืบค้นบริบทเพื่อวิเคราะห์ระดับความรุนแรงของปัญหา',
    icon: Brain,
  },
  {
    step: '04',
    title: 'Human-in-the-Loop',
    subtitle: 'Validation & Auto Dispatch',
    desc: 'ร่างรายงานและอีเมลแจ้งเตือนลูกค้าอัตโนมัติ โดยมีทีม Ops กดอนุมัติเพื่อความปลอดภัยสูงสุด',
    icon: Mail,
  },
];

const METRICS = [
  { label: 'Manual Time Reduction', value: '95%', detail: 'ลดเวลาตรวจสอบของทีม Ops' },
  { label: 'Classification Accuracy', value: '99.4%', detail: 'ความแม่นยำในการวิเคราะห์ Alert' },
  { label: 'Engine SLA Latency', value: '< 0.3s', detail: 'ความเร็วเฉลี่ยในการประมวลผล' },
  { label: 'System Availability', value: '24/7', detail: 'ทำงานอัตโนมัติตลอดเวลา' },
];

export default function Projects() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState<'architecture' | 'hil' | 'standards'>('architecture');
  const [approvedState, setApprovedState] = useState(false);

  return (
    <section id="projects" className="relative py-28 border-t border-border bg-background overflow-hidden">
      {/* Precision grid backdrop */}
      <div className="absolute inset-0 grid-bg-enterprise opacity-50 dark:opacity-25" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 dark:bg-brand-400" />
            <span className="font-mono text-xs font-semibold text-brand-700 dark:text-brand-300 tracking-wider uppercase">
              FEATURED CASE STUDY &amp; ENGINEERING
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            ผลงานระบบและ{' '}
            <span className="text-gradient">สถาปัตยกรรมทางวิศวกรรม</span>
          </h2>
          <p className="reveal reveal-delay-2 text-muted text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            ตัวอย่างระบบจริงที่ผสาน Medallion Architecture, Concept Learning และ Agentic AI ในการแก้ปัญหาโครงสร้างพื้นฐานระดับองค์กร
          </p>
        </div>

        {/* Main Enterprise Case Study Container */}
        <div className="reveal reveal-delay-1 glass-card rounded-3xl p-8 sm:p-12 border-glow-hover relative overflow-hidden shadow-xl">
          {/* Case Study Header Banner */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 mb-8 border-b border-border">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-700 dark:text-brand-400 border border-brand-500/20 font-medium">
                  CASE STUDY #01
                </span>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-accent-500/10 text-accent-700 dark:text-accent-400 border border-accent-500/20 font-medium">
                  ENTERPRISE MVP
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                AI Proactive Support &amp; Automated Ticket Generation Engine
              </h3>
              <p className="text-sm text-muted mt-1">
                ระบบวิเคราะห์ Alert และออกตั๋วงานอัตโนมัติสำหรับ Data Center ด้วยสถาปัตยกรรม Medallion + RAG
              </p>
            </div>

            {/* Actions: View on GitHub & Tags */}
            <div className="flex flex-col sm:items-end gap-3">
              <a
                href="https://github.com/Forge-Solutions-Lab/Forge-Solutions-Lab.github.io"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-muted hover:bg-surface-hover text-foreground text-xs font-mono font-semibold border border-border transition-all shadow-sm group"
              >
                <Github className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>View Source on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex flex-wrap gap-2">
                {['Medallion Pipeline', 'RAG & Text-to-SQL', 'Concept Rules', 'Human-in-the-Loop'].map((tag) => (
                  <span key={tag} className="font-mono text-[11px] px-3 py-1 rounded-lg bg-surface-muted text-muted-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {METRICS.map((m) => (
              <div key={m.label} className="p-5 rounded-2xl bg-surface-muted border border-border shadow-sm">
                <div className="font-mono text-3xl font-bold text-brand-600 dark:text-brand-400 tracking-tight">{m.value}</div>
                <div className="font-display text-xs font-semibold text-foreground mt-1 uppercase tracking-wider">{m.label}</div>
                <div className="text-xs text-muted mt-0.5">{m.detail}</div>
              </div>
            ))}
          </div>

          {/* Interactive Inspection Tabs */}
          <div className="mb-8">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <button
                onClick={() => setActiveTab('architecture')}
                className={`font-mono text-xs px-4 py-2 rounded-lg transition-all duration-150 ${
                  activeTab === 'architecture'
                    ? 'bg-brand-500/15 text-brand-700 dark:text-brand-300 border border-brand-500/30 font-semibold'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                01. End-to-End Pipeline
              </button>
              <button
                onClick={() => setActiveTab('hil')}
                className={`font-mono text-xs px-4 py-2 rounded-lg transition-all duration-150 ${
                  activeTab === 'hil'
                    ? 'bg-brand-500/15 text-brand-700 dark:text-brand-300 border border-brand-500/30 font-semibold'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                02. Human-in-the-Loop Validation
              </button>
              <button
                onClick={() => setActiveTab('standards')}
                className={`font-mono text-xs px-4 py-2 rounded-lg transition-all duration-150 ${
                  activeTab === 'standards'
                    ? 'bg-brand-500/15 text-brand-700 dark:text-brand-300 border border-brand-500/30 font-semibold'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                03. Architectural Compliance
              </button>
            </div>
          </div>

          {/* Tab 1: Architecture Pipeline */}
          {activeTab === 'architecture' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
              {FLOW_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="p-6 rounded-2xl bg-surface-muted border border-border flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400">{step.step}</span>
                        <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <h4 className="font-display font-bold text-foreground text-base">{step.title}</h4>
                      <p className="font-mono text-xs text-brand-600 dark:text-brand-400 mt-0.5 mb-3 font-medium">{step.subtitle}</p>
                      <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Tab 2: Human-in-the-Loop Demo Panel */}
          {activeTab === 'hil' && (
            <div className="p-6 rounded-2xl bg-surface-muted border border-border animate-fade-in shadow-sm">
              <div className="grid lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                      <span className="font-mono text-xs text-foreground font-semibold">TICKET INSPECTION #TKT-4821</span>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 font-medium">
                      STATUS: PENDING REVIEW
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3.5 rounded-lg bg-surface border border-border space-y-1 text-foreground">
                      <div className="text-muted text-[11px]">// Alert Inference Result</div>
                      <div>Rack ID: <span className="text-foreground font-semibold">Rack-A12 (Zone B)</span></div>
                      <div>SLA Condition: <span className="text-amber-600 dark:text-amber-400 font-semibold">Temperature &gt; 35°C (3x within 24h)</span></div>
                      <div>Action: <span className="text-brand-600 dark:text-brand-300 font-semibold">Drafted Customer Notification &amp; Tech Dispatch</span></div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-surface border border-border space-y-1">
                      <div className="text-muted text-[11px]">// AI Drafted Notice Preview</div>
                      <p className="text-muted font-sans text-xs leading-relaxed">
                        "เรียน ลูกค้าผู้ดูแล Rack-A12, ระบบตรวจพบแนวโน้มความร้อนสะสมเกินเกณฑ์ SLA ติดต่อกัน 3 ครั้ง วิศวกร AI แนะนำให้ทำการตรวจสอบระบบระบายอากาศเสริม..."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between gap-4 p-5 rounded-xl bg-surface border border-border shadow-md">
                  <div className="space-y-2">
                    <h5 className="font-display text-sm font-bold text-foreground">Ops Control Action</h5>
                    <p className="text-xs text-muted">
                      Human Operator สามารถตรวจสอบความถูกต้องและกดยืนยันเพื่อส่งออกอีเมลจริง
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      onClick={() => setApprovedState(!approvedState)}
                      className={`w-full py-2.5 px-4 rounded-lg font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm ${
                        approvedState
                          ? 'bg-accent-500/20 text-accent-700 dark:text-accent-300 border border-accent-500/40'
                          : 'bg-brand-600 hover:bg-brand-500 text-white'
                      }`}
                    >
                      <Check className="w-4 h-4" />
                      <span>{approvedState ? 'APPROVED & DISPATCHED' : 'APPROVE & SEND (กดเพื่อทดสอบ)'}</span>
                    </button>
                    {approvedState && (
                      <p className="font-mono text-[11px] text-accent-600 dark:text-accent-400 text-center animate-fade-in font-medium">
                        Audit Log recorded at 0.12s latency
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Standards */}
          {activeTab === 'standards' && (
            <div className="grid sm:grid-cols-3 gap-4 animate-fade-in">
              <div className="p-5 rounded-2xl bg-surface-muted border border-border shadow-sm">
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-brand-500/10 text-brand-700 dark:text-brand-400 font-semibold uppercase">Data Architecture</span>
                <h4 className="font-display font-bold text-foreground text-base mt-2 mb-1">Databricks Medallion</h4>
                <p className="text-xs text-muted leading-relaxed">
                  ประมวลผล Big Data ผ่าน Bronze, Silver และ Gold Layer เพื่อความแม่นยำและการตรวจสอบย้อนหลังที่โปร่งใส
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-muted border border-border shadow-sm">
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-accent-500/10 text-accent-700 dark:text-accent-400 font-semibold uppercase">Cloud &amp; AI Security</span>
                <h4 className="font-display font-bold text-foreground text-base mt-2 mb-1">AWS GenAI Best Practices</h4>
                <p className="text-xs text-muted leading-relaxed">
                  สถาปัตยกรรม RAG ที่มีความปลอดภัยตามข้อกำหนด AWS Enterprise พร้อมการควบคุมสิทธิ์ RBAC เข้มงวด
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-muted border border-border shadow-sm">
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 font-semibold uppercase">ITSM Standard</span>
                <h4 className="font-display font-bold text-foreground text-base mt-2 mb-1">ITIL Framework Compliance</h4>
                <p className="text-xs text-muted leading-relaxed">
                  รองรับกระบวนการจัดการ Incident &amp; Ticket Management ตามมาตรฐานสากลเพื่อความต่อเนื่องทางธุรกิจ
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
