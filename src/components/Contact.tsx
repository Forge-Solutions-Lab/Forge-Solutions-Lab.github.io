import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Building2, MessageSquare } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/8 rounded-full blur-[120px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
              <span className="text-xs font-medium text-accent-400 tracking-wide uppercase">Final CTA</span>
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              พร้อมที่จะเปลี่ยนทีม Ops ของคุณ
              <br />
              ให้ทำงานแบบ
              <span className="text-gradient-cyan"> Proactive แล้วหรือยัง?</span>
            </h2>
            <p className="reveal reveal-delay-2 text-lg text-ink-300 mt-5 max-w-lg">
              ลดเวลาทำงาน ลดข้อผิดพลาด และเพิ่มความประทับใจให้ลูกค้า Data Center ของคุณตั้งแต่วันนี้
            </p>

            {/* Contact details */}
            <div className="reveal reveal-delay-3 space-y-4 mt-8">
              {[
                { icon: Mail, label: 'อีเมล', value: 'contact@forge-solutions-lab.com' },
                { icon: Phone, label: 'โทร', value: '+66 (0) 2-123-4567' },
                { icon: MapPin, label: 'สำนักงาน', value: 'กรุงเทพมหานคร, ประเทศไทย' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center group-hover:bg-brand-500/15 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-xs text-ink-400">{item.label}</p>
                    <p className="text-sm text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Response promise */}
            <div className="reveal reveal-delay-4 mt-8 p-4 rounded-xl glass-light flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0" />
              <p className="text-sm text-ink-200">เราตอบกลับทุกการสอบถามภายใน 1 วันทำการ</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-2">
            <div className="relative glass rounded-2xl p-8 glow-cyan">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-accent-500/15 flex items-center justify-center mb-5 animate-fade-in">
                    <CheckCircle2 className="w-10 h-10 text-accent-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">ขอบคุณครับ!</h3>
                  <p className="text-ink-300 max-w-sm">
                    เราได้รับคำขอของคุณแล้ว ทีมงานของเราจะติดต่อกลับภายใน 1 วันทำการ
                    เพื่อนัดหมายสาธิตระบบ
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', message: '' }); }}
                    className="mt-6 px-6 py-2.5 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    ส่งคำขอใหม่
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-ink-300 mb-2">
                      ชื่อ-นามสกุล
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="สมชาย ใจดี"
                        className="w-full px-4 py-3 pl-11 bg-ink-800/50 border border-white/10 rounded-xl text-white placeholder-ink-500 focus:outline-none focus:border-brand-400/40 focus:ring-1 focus:ring-brand-400/20 transition-all"
                      />
                      <MessageSquare className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-ink-300 mb-2">
                      อีเมลที่ใช้งาน
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 pl-11 bg-ink-800/50 border border-white/10 rounded-xl text-white placeholder-ink-500 focus:outline-none focus:border-brand-400/40 focus:ring-1 focus:ring-brand-400/20 transition-all"
                      />
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-ink-300 mb-2">
                      บริษัท
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="ชื่อบริษัทของคุณ"
                        className="w-full px-4 py-3 pl-11 bg-ink-800/50 border border-white/10 rounded-xl text-white placeholder-ink-500 focus:outline-none focus:border-brand-400/40 focus:ring-1 focus:ring-brand-400/20 transition-all"
                      />
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-ink-300 mb-2">
                      รายละเอียดเพิ่มเติม
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="บอกเราเกี่ยวกับ Data Center ของคุณ และสิ่งที่ต้องการให้อัตโนมัติ..."
                      className="w-full px-4 py-3 bg-ink-800/50 border border-white/10 rounded-xl text-white placeholder-ink-500 focus:outline-none focus:border-brand-400/40 focus:ring-1 focus:ring-brand-400/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full px-6 py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-brand-500/30 hover:scale-[1.02] transition-all duration-300"
                  >
                    ติดต่อเราเพื่อพูดคุยรายละเอียด
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-xs text-ink-400 text-center">
                    การส่งแบบฟอร์ม ถือว่าคุณยอมรับนโยบายความเป็นส่วนตัวของเรา
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
