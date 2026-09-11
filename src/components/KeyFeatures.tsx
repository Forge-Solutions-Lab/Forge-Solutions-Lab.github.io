import { UserCheck, ShieldCheck, FileText, Eye, Edit3, Send, Lock, ScrollText } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FEATURES = [
  {
    icon: UserCheck,
    emoji: '👨‍💻',
    title: 'Human-in-the-Loop Validation',
    description: 'หมดกังวลเรื่อง AI Hallucination ระบบมี Dashboard ให้ทีม Ops ตรวจสอบ แก้ไข และกดอนุมัติ (Approve & Send) ก่อนส่งอีเมลจริงทุกครั้ง',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    borderColor: 'hover:border-brand-400/20',
  },
  {
    icon: ShieldCheck,
    emoji: '🔒',
    title: 'Enterprise-Grade Security (RBAC)',
    description: 'ปกป้องข้อมูลความลับทางธุรกิจของลูกค้าด้วย Role-Based Access Control จำกัดสิทธิ์การเข้าถึงอย่างเข้มงวด',
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
    borderColor: 'hover:border-accent-400/20',
  },
  {
    icon: FileText,
    emoji: '📝',
    title: 'Audit Logging',
    description: 'บันทึกประวัติการสั่งงานและการเปิด Ticket ทุกขั้นตอน เพื่อความโปร่งใสและตรวจสอบย้อนหลังได้',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    borderColor: 'hover:border-amber-400/20',
  },
];

export default function KeyFeatures() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span className="text-xs font-medium text-brand-300 tracking-wide uppercase">Key Features & Add-ons</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            ฟีเจอร์เด่นที่ตอบโจทย์
            <span className="text-gradient-cyan"> ระดับองค์กร</span>
          </h2>
          <p className="reveal reveal-delay-2 text-lg text-ink-300 mt-5">
            สร้างความมั่นใจว่าระบบของเราปลอดภัยและควบคุมได้
          </p>
        </div>

        {/* Human-in-the-Loop Dashboard Mockup */}
        <div className="reveal reveal-delay-2 mb-12">
          <div className="glass rounded-2xl p-6 md:p-8 glow-cyan">
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Ops Dashboard — ตรวจสอบ Ticket</p>
                  <p className="text-xs text-ink-400">Human-in-the-Loop Validation</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-amber-400 px-3 py-1 rounded-full bg-amber-400/10">รอการอนุมัติ</span>
              </div>
            </div>

            {/* Ticket preview */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Left: Ticket info */}
              <div className="md:col-span-2 space-y-4">
                <div className="bg-ink-800/40 rounded-xl p-5 border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-brand-400">TKT-4821</span>
                    <span className="text-xs text-ink-400">·</span>
                    <span className="text-xs text-ink-400">Rack-A12</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 font-medium">Critical</span>
                  </div>
                  <p className="text-sm text-white mb-2">อุณหภูมิเกิน 35°C เป็นครั้งที่ 3 ในวันนี้</p>
                  <div className="space-y-1.5 mt-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-ink-400">อุณหภูมิสูงสุด</span>
                      <span className="text-amber-400 font-mono">37.2°C</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-ink-400">ความถี่</span>
                      <span className="text-white font-mono">3 ครั้ง / วัน</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-ink-400">SLA Status</span>
                      <span className="text-red-400 font-medium">ใกล้ผิด SLA</span>
                    </div>
                  </div>
                </div>

                {/* AI suggested email */}
                <div className="bg-ink-800/40 rounded-xl p-5 border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Edit3 className="w-4 h-4 text-accent-400" />
                    <p className="text-xs font-medium text-accent-400">AI ร่างอีเมลแล้ว — รอตรวจสอบ</p>
                  </div>
                  <div className="text-xs text-ink-300 space-y-1.5">
                    <p><span className="text-ink-400">ถึง:</span> customer@company.com</p>
                    <p><span className="text-ink-400">หัวข้อ:</span> แจ้งเตือน: อุณหภูมิ Rack-A12 เกินเกณฑ์</p>
                    <p className="pt-1 leading-relaxed">
                      เรียน ลูกค้า, ระบบตรวจพบว่าอุณหภูมิในตู้ Rack-A12 เกิน 35°C เป็นครั้งที่ 3 ในวันนี้...
                      <span className="text-ink-500"> (แก้ไขได้ก่อนส่ง)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Action panel */}
              <div className="flex flex-col gap-3">
                <div className="bg-ink-800/40 rounded-xl p-5 border border-white/5">
                  <p className="text-xs font-medium text-ink-400 uppercase tracking-wider mb-3">การกระทำ</p>
                  <div className="space-y-2">
                    <button className="w-full px-4 py-2.5 bg-accent-500/15 text-accent-400 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-accent-500/25 transition-colors">
                      <Send className="w-4 h-4" />
                      อนุมัติ & ส่ง
                    </button>
                    <button className="w-full px-4 py-2.5 bg-ink-700/50 text-ink-200 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-ink-700/80 transition-colors">
                      <Edit3 className="w-4 h-4" />
                      แก้ไขก่อนส่ง
                    </button>
                    <button className="w-full px-4 py-2.5 bg-red-500/10 text-red-400 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-red-500/20 transition-colors">
                      ปฏิเสธ Ticket
                    </button>
                  </div>
                </div>

                {/* Audit log mini */}
                <div className="bg-ink-800/40 rounded-xl p-5 border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <ScrollText className="w-4 h-4 text-ink-400" />
                    <p className="text-xs font-medium text-ink-400 uppercase tracking-wider">Audit Log</p>
                  </div>
                  <div className="space-y-1.5 text-[10px] text-ink-400 font-mono">
                    <p>14:32 — AI สร้าง Ticket</p>
                    <p>14:32 — AI ร่างอีเมล</p>
                    <p>14:33 — รอ Ops ตรวจสอบ...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal reveal-delay-${i + 1} group relative p-7 rounded-2xl glass border border-white/5 ${feature.borderColor} transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{feature.emoji}</div>
                <div className={`w-11 h-11 rounded-xl ${feature.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-ink-300 leading-relaxed">{feature.description}</p>

              <div className={`absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent ${feature.color.replace('text-', 'via-')}/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
