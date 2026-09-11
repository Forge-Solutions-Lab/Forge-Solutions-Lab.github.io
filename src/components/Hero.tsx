import { useEffect, useState } from 'react';
import { ArrowRight, Play, Server, Cpu, Activity, ShieldCheck, Brain, Mail, Thermometer } from 'lucide-react';

const TICKET_LOG = [
  { id: 'TKT-4821', type: 'อุณหภูมิเกิน 35°C', server: 'Rack-A12', status: 'สร้าง Ticket', time: '0.3s' },
  { id: 'TKT-4822', type: 'ไฟตก 3 ครั้ง/วัน', server: 'Rack-B07', status: 'AI วิเคราะห์', time: '0.1s' },
  { id: 'TKT-4823', type: 'แจ้งเตือนลูกค้า', server: 'Rack-C03', status: 'ส่งอีเมล', time: '0.5s' },
  { id: 'TKT-4824', type: 'Humidity ผิดปกติ', server: 'Rack-A18', status: 'สร้าง Ticket', time: '0.2s' },
  { id: 'TKT-4825', type: 'Power Usage สูง', server: 'Rack-D11', status: 'AI วิเคราะห์', time: '0.1s' },
];

const STATUS_COLORS: Record<string, string> = {
  'สร้าง Ticket': 'text-brand-400 bg-brand-400/10',
  'AI วิเคราะห์': 'text-amber-400 bg-amber-400/10',
  'ส่งอีเมล': 'text-accent-400 bg-accent-400/10',
};

export default function Hero() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % TICKET_LOG.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg animate-grid-move opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/80 to-ink-950" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/8 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent animate-scan" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Content */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light w-fit animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
            </span>
            <span className="text-xs font-medium text-ink-200 tracking-wide">AI Proactive Support · ทำงาน 24/7 อัตโนมัติ</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] text-white animate-fade-up">
            เปลี่ยน Data Center ของคุณ
            <br />
            ให้ล้ำหน้าด้วย
            <br />
            <span className="text-gradient">AI Proactive Support</span>
          </h1>

          <p className="text-lg text-ink-300 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            ยกระดับการจัดการ Alert และแจ้งเตือนลูกค้าอัตโนมัติด้วย AI (RAG &amp; Text-to-SQL)
            หมดปัญหาความล่าช้าในการตรวจสอบ Manual ตอบสนอง SLA ได้เร็วกว่า
            และให้บริการแบบ Proactive ได้อย่างแท้จริง
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-7 py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-brand-500/30 hover:scale-105 transition-all duration-300"
            >
              นัดหมายสาธิตระบบ
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.querySelector('#solution')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-7 py-3.5 glass text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-ink-700/60 transition-all duration-300"
            >
              <Play className="w-5 h-5 text-brand-400" fill="currentColor" />
              ปรึกษาทีมวิศวกรของเรา
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 pt-4 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            {[
              { icon: ShieldCheck, label: 'RBAC Security' },
              { icon: Server, label: 'Medallion Architecture' },
              { icon: Activity, label: 'Real-time AI Analysis' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-ink-300">
                <item.icon className="w-4 h-4 text-brand-400" />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Live ticket dashboard mockup */}
        <div className="relative animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <div className="relative glass rounded-2xl p-6 glow-cyan">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Gen Ticket Engine</p>
                  <p className="text-xs text-ink-400">Live · Data Center Datalog</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-400" />
                </span>
                <span className="text-xs font-medium text-accent-400">ACTIVE</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label: 'Tickets สร้าง', value: '12,847', color: 'text-brand-400' },
                { label: 'ส่งอีเมลอัตโนมัติ', value: '11,203', color: 'text-accent-400' },
                { label: 'เวลาเฉลี่ย', value: '0.3s', color: 'text-amber-400' },
              ].map((stat) => (
                <div key={stat.label} className="bg-ink-800/50 rounded-xl p-3 border border-white/5">
                  <p className={`text-xl font-display font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-[10px] text-ink-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Live log */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-ink-400 mb-2">Recent Tickets</p>
              {TICKET_LOG.map((ticket, i) => (
                <div
                  key={ticket.id}
                  className={`flex items-center gap-3 p-3 rounded-lg bg-ink-800/30 border border-white/5 transition-all duration-500 ${
                    i === logIndex ? 'ring-1 ring-brand-400/40 bg-ink-800/60' : ''
                  }`}
                >
                  <span className="text-xs font-mono text-ink-400 w-16">{ticket.id}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">{ticket.type}</p>
                    <p className="text-xs text-ink-400">{ticket.server}</p>
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-1 rounded-full whitespace-nowrap ${STATUS_COLORS[ticket.status]}`}>
                    {ticket.status}
                  </span>
                  <span className="text-xs font-mono text-ink-300 w-10 text-right">{ticket.time}</span>
                </div>
              ))}
            </div>

            {/* Mini chart */}
            <div className="mt-5 pt-5 border-t border-white/5">
              <div className="flex items-end justify-between gap-1 h-16">
                {[40, 65, 50, 80, 60, 90, 70, 95, 75, 85, 60, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-brand-600/40 to-brand-400/80 transition-all duration-700 hover:from-brand-500/60 hover:to-brand-300/90"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="text-[10px] text-ink-400 mt-2">อัตราการสร้าง Ticket · 12 ช่วงล่าสุด</p>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 glow-cyan-strong animate-float">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-accent-400" />
              <div>
                <p className="text-sm font-bold text-white">RAG + Text-to-SQL</p>
                <p className="text-[10px] text-ink-300">AI วิเคราะห์อัตโนมัติ</p>
              </div>
            </div>
          </div>

          {/* Floating badge bottom */}
          <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 glow-cyan animate-float" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-brand-400" />
              <div>
                <p className="text-sm font-bold text-white">Auto Email</p>
                <p className="text-[10px] text-ink-300">แจ้งลูกค้าอัตโนมัติ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
