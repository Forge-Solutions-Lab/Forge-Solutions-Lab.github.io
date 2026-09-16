import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Machine Learning Model Development',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate brief network dispatch / ready for Formspree endpoint integration
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-28 border-t border-border bg-background overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-accent-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Consultation Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 dark:bg-brand-400" />
                <span className="font-mono text-xs font-semibold text-brand-700 dark:text-brand-300 tracking-wider uppercase">
                  INITIATE COLLABORATION
                </span>
              </div>
              <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                ปรึกษาทีมวิศวกร{' '}
                <span className="text-gradient-cyan">Forge Solutions</span>
              </h2>
              <p className="reveal reveal-delay-2 text-muted text-base mt-4 leading-relaxed">
                พร้อมยกระดับองค์กรด้วยสถาปัตยกรรม AI และ Data Pipeline หรือไม่? ติดต่อทีมงานเพื่อประเมินความเป็นไปได้ทางเทคนิคและการออกแบบโซลูชัน
              </p>
            </div>

            {/* Direct Channel Badges */}
            <div className="reveal reveal-delay-3 space-y-3 pt-2">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-muted border border-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] text-muted uppercase font-semibold">Official Inquiries</div>
                  <div className="text-sm font-semibold text-foreground font-mono">contact@forge-solutions-lab.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-muted border border-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-600 dark:text-accent-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] text-muted uppercase font-semibold">Engineering Lab Location</div>
                  <div className="text-sm font-semibold text-foreground">Bangkok, Thailand</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-muted border border-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] text-muted uppercase font-semibold">SLA Response Guarantee</div>
                  <div className="text-sm font-semibold text-foreground">ติดต่อกลับภายใน 1 วันทำการ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Enterprise Consultation Form */}
          <div className="reveal reveal-delay-2 lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border-glow-hover relative overflow-hidden shadow-xl">
              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-accent-500/20 border border-accent-500/40 flex items-center justify-center text-accent-600 dark:text-accent-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">ได้รับคำขอของคุณเรียบร้อยแล้ว</h3>
                  <p className="text-sm text-muted max-w-md leading-relaxed">
                    ขอบคุณที่ให้ความสนใจในโซลูชันของ Forge Solutions Lab ทีมวิศวกรของเราจะตรวจสอบโจทย์ทางเทคนิคและติดต่อกลับเพื่อจัดเวลาประชุมโดยเร็วที่สุด
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setForm({
                        name: '',
                        email: '',
                        company: '',
                        service: 'Machine Learning Model Development',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-surface-muted hover:bg-surface-hover text-brand-700 dark:text-brand-300 text-xs font-mono font-semibold border border-border transition-colors shadow-sm"
                  >
                    ส่งข้อความอื่นเพิ่มเติม
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs font-semibold text-muted mb-2 uppercase">
                        ชื่อ-นามสกุล *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="ดร. สมชาย มุ่งมั่น"
                        className="w-full px-4 py-3 rounded-xl bg-surface-muted border border-border text-foreground text-sm focus:outline-none focus:border-brand-500 transition-colors font-sans placeholder:text-muted/60"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-semibold text-muted mb-2 uppercase">
                        อีเมลองค์กร *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="somchai@enterprise.co.th"
                        className="w-full px-4 py-3 rounded-xl bg-surface-muted border border-border text-foreground text-sm focus:outline-none focus:border-brand-500 transition-colors font-sans placeholder:text-muted/60"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs font-semibold text-muted mb-2 uppercase">
                        ชื่อบริษัท / หน่วยงาน
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="บริษัท นวัตกรรม จำกัด"
                        className="w-full px-4 py-3 rounded-xl bg-surface-muted border border-border text-foreground text-sm focus:outline-none focus:border-brand-500 transition-colors font-sans placeholder:text-muted/60"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-semibold text-muted mb-2 uppercase">
                        ประเภทบริการที่สนใจ
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-surface-muted border border-border text-foreground text-sm focus:outline-none focus:border-brand-500 transition-colors font-sans"
                      >
                        <option value="Machine Learning Model Development">Machine Learning Model Development (T-P-E)</option>
                        <option value="Concept Learning & Decision Rules">Concept Learning &amp; Version Space Rules</option>
                        <option value="Data Pipeline (Medallion Architecture)">Data Pipeline (Medallion Bronze/Silver/Gold)</option>
                        <option value="AI Agent & RAG Automation">AI Agent, RAG &amp; Autonomous Systems</option>
                        <option value="Other Consultation">การปรึกษาและออกแบบสถาปัตยกรรมเฉพาะทาง</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-semibold text-muted mb-2 uppercase">
                      รายละเอียดโจทย์ หรือข้อสอบถาม *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="อธิบายปัญหา ข้อมูลที่มี หรือเป้าหมายทางธุรกิจที่ต้องการนำ AI และ Data Pipeline มาประยุกต์ใช้..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-muted border border-border text-foreground text-sm focus:outline-none focus:border-brand-500 transition-colors font-sans placeholder:text-muted/60 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25 transition-all duration-200 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? 'กำลังส่งข้อมูล...' : 'ส่งข้อมูลเพื่อนัดหมายปรึกษา'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
