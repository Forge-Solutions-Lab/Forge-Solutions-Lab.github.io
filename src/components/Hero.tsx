import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Database, Cpu, Activity, Sparkles, CheckCircle2, ChevronRight, Layers, Workflow } from 'lucide-react';

const TELEMETRY_STREAM = [
  { step: '01', stage: 'Data Ingestion', metric: '1.24 GB/s', status: 'Optimal' },
  { step: '02', stage: 'Concept Induction', metric: 'Version Space OK', status: 'Converged' },
  { step: '03', stage: 'Decision Engine', metric: '0.28s Latency', status: 'Active' },
  { step: '04', stage: 'SLA Rule Check', metric: '99.4% Accuracy', status: 'Validated' },
];

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % TELEMETRY_STREAM.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Precision background layer */}
      <div className="absolute inset-0 grid-bg-enterprise opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/20 via-ink-950/80 to-ink-950 pointer-events-none" />

      {/* Atmospheric glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-accent-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Core Positioning */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Engineering Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill w-fit animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <span className="font-mono text-xs font-medium text-brand-300 tracking-wide uppercase">
              AI &amp; Machine Learning Engineering Lab
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2 animate-fade-up">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              We Build Systems That{' '}
              <span className="text-gradient-cyan">Learn From Experience</span>
            </h1>
          </div>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg text-ink-300 leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            เราออกแบบและพัฒนาโซลูชัน <strong className="text-white font-medium">AI, Machine Learning</strong> และ <strong className="text-white font-medium">Data Pipeline</strong> ที่ฉลาดขึ้นทุกครั้งที่มีข้อมูลใหม่เข้ามา ขับเคลื่อนด้วยแนวคิด <span className="font-mono text-xs px-2 py-0.5 rounded bg-brand-500/10 border border-brand-500/20 text-brand-300">T-P-E (Task, Performance, Experience)</span> สู่ระบบระดับ Enterprise ที่ใช้งานได้จริงและวัดผลได้อย่างแม่นยำ
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 pt-2 animate-fade-up" style={{ animationDelay: '0.18s' }}>
            <button
              onClick={() => scrollTo('#projects')}
              className="px-6 py-3.5 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25 transition-all duration-200 hover:scale-[1.02]"
            >
              <span>ดูผลงาน &amp; Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-3.5 glass-pill hover:bg-white/[0.06] text-ink-200 hover:text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span>ปรึกษาทีมวิศวกร</span>
              <ChevronRight className="w-4 h-4 text-ink-400" />
            </button>
          </div>

          {/* Architectural Trust Points */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.06] animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <div className="flex items-center gap-2.5">
              <Workflow className="w-4 h-4 text-brand-400 flex-shrink-0" />
              <span className="text-xs font-medium text-ink-300">Well-Posed ML (T-P-E)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-accent-400 flex-shrink-0" />
              <span className="text-xs font-medium text-ink-300">Medallion Architecture</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-brand-400 flex-shrink-0" />
              <span className="text-xs font-medium text-ink-300">Human-in-the-Loop</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive System Telemetry Engine */}
        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="glass-card rounded-2xl p-6 glow-cyan-enterprise relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-400 animate-pulse" />
                <span className="font-mono text-xs font-semibold text-white tracking-wide">
                  EXPERIENCE ENGINE
                </span>
              </div>
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20">
                SYSTEM ONLINE
              </span>
            </div>

            {/* Live ML Philosophy Terminal Block */}
            <div className="bg-ink-950/80 rounded-xl p-4 border border-white/[0.06] mb-4 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-ink-400 border-b border-white/[0.04] pb-2">
                <span>// Machine Learning Core Definition</span>
                <span className="text-[10px] text-brand-400">Mitchell (1997)</span>
              </div>
              <p className="text-ink-200 leading-relaxed">
                <span className="text-brand-400 font-semibold">T</span>ask: Automated Decision &amp; SLA Prediction<br />
                <span className="text-accent-400 font-semibold">P</span>erformance: Accuracy &gt; 99.4%, SLA Latency &lt; 0.3s<br />
                <span className="text-amber-400 font-semibold">E</span>xperience: Continuous Ingestion &amp; Version Space
              </p>
            </div>

            {/* Pipeline Stage Stream */}
            <div className="space-y-2.5 mb-4">
              <div className="text-[11px] font-mono text-ink-400 flex justify-between">
                <span>PIPELINE TELEMETRY</span>
                <span>REAL-TIME STATUS</span>
              </div>

              {TELEMETRY_STREAM.map((item, index) => {
                const isActive = index === activeStep;
                return (
                  <div
                    key={item.step}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg border transition-all duration-300 font-mono text-xs ${
                      isActive
                        ? 'bg-brand-500/10 border-brand-500/30 text-white'
                        : 'bg-ink-900/40 border-white/[0.04] text-ink-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-brand-400 font-bold">{item.step}</span>
                      <span className={isActive ? 'text-white font-medium' : 'text-ink-300'}>{item.stage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-ink-300">{item.metric}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded ${
                        isActive ? 'bg-accent-500/20 text-accent-300 font-semibold' : 'text-ink-500'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Status Ribbon */}
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-ink-400">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-brand-400" />
                <span>Medallion Bronze &rarr; Silver &rarr; Gold</span>
              </div>
              <span className="font-mono text-ink-300 text-[11px]">24/7 Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
