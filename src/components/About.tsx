import { Target, Compass } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 border-t border-border bg-background overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 dark:bg-brand-400" />
            <span className="font-mono text-xs font-semibold text-brand-700 dark:text-brand-300 tracking-wider uppercase">
              ABOUT FORGE SOLUTIONS LAB
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            เราสร้างระบบอัจฉริยะที่{' '}
            <span className="text-gradient">เรียนรู้และพัฒนาอย่างต่อเนื่อง</span>
          </h2>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Narrative & Mission */}
          <div className="reveal reveal-delay-1 lg:col-span-7 flex flex-col justify-between glass-card rounded-2xl p-8 sm:p-10 border-glow-hover shadow-lg">
            <div className="space-y-6">
              <div className="space-y-4 text-foreground/90 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong className="text-foreground font-semibold">Forge Solutions Lab</strong> ก่อตั้งขึ้นเพื่อนำหลักการทางวิศวกรรม <strong className="text-brand-700 dark:text-brand-300 font-medium">Machine Learning</strong> และ <strong className="text-brand-700 dark:text-brand-300 font-medium">Data Architecture</strong> มาแก้ปัญหาทางธุรกิจจริง เราเชื่อว่าระบบที่ดีต้องมี <em className="text-accent-700 dark:text-accent-300 not-italic font-medium">"ประสบการณ์ (Experience)"</em> เป็นตัวขับเคลื่อน ไม่ใช่เพียงแค่กฎเงื่อนไขแบบเดิม
                </p>
                <p className="text-muted text-base">
                  ทีมวิศวกรของเราทำงานครอบคลุมตั้งแต่การออกแบบสถาปัตยกรรมข้อมูลขนาดใหญ่ (Medallion Pipeline), การสร้างโมเดล Machine Learning ที่มีกรอบการวัดผลที่แน่นอน ไปจนถึงการพัฒนาระบบ AI Agent อัตโนมัติที่ช่วยให้องค์กรตัดสินใจได้อย่างเฉียบคมและแม่นยำตลอด 24 ชั่วโมง
                </p>
              </div>

              {/* Mission & Vision Callouts */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="p-4 rounded-xl bg-surface-muted border border-border">
                  <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 mb-2">
                    <Target className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase font-bold tracking-wider">Mission</span>
                  </div>
                  <p className="text-sm text-foreground/90 leading-normal">
                    เปลี่ยนข้อมูลดิบขององค์กรให้กลายเป็นระบบอัจฉริยะที่สามารถตัดสินใจและปฏิบัติงานได้ด้วยตนเอง
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-muted border border-border">
                  <div className="flex items-center gap-2 text-accent-600 dark:text-accent-400 mb-2">
                    <Compass className="w-4 h-4" />
                    <span className="font-mono text-xs uppercase font-bold tracking-wider">Vision</span>
                  </div>
                  <p className="text-sm text-foreground/90 leading-normal">
                    เป็นพันธมิตรด้านเทคโนโลยี AI ที่ธุรกิจไว้วางใจให้ระบบเรียนรู้และยกระดับประสิทธิภาพแทนคน
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The ML Engineering Principles (T-P-E) */}
          <div className="reveal reveal-delay-2 lg:col-span-5 flex flex-col gap-4">
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex-1 flex flex-col justify-between border-glow-hover shadow-lg">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
                  <span className="font-mono text-xs text-brand-700 dark:text-brand-400 font-semibold tracking-wider">
                    OUR CORE METHODOLOGY
                  </span>
                  <span className="text-[11px] font-mono text-muted">Well-Posed Problem</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  หลักการ Task, Performance &amp; Experience
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  ทุกระบบที่เราสร้าง ถูกออกแบบตามทฤษฎี Machine Learning สากลเพื่อให้สามารถวัดผลลัพธ์และพัฒนาตนเองได้อย่างเป็นวิทยาศาสตร์:
                </p>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-muted border border-border">
                    <div className="w-7 h-7 rounded bg-brand-500/10 border border-brand-500/20 flex items-center justify-center font-mono text-xs font-bold text-brand-600 dark:text-brand-400 flex-shrink-0">
                      T
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-foreground uppercase font-mono">Task (ภารกิจเป้าหมาย)</h4>
                      <p className="text-xs text-muted mt-0.5">ระบุปัญหาและฟังก์ชันงานที่ต้องการแก้ไขอย่างชัดเจน</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-muted border border-border">
                    <div className="w-7 h-7 rounded bg-accent-500/10 border border-accent-500/20 flex items-center justify-center font-mono text-xs font-bold text-accent-600 dark:text-accent-400 flex-shrink-0">
                      P
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-foreground uppercase font-mono">Performance (การวัดผล)</h4>
                      <p className="text-xs text-muted mt-0.5">มีตัวชี้วัดความแม่นยำ (Accuracy, SLA) ที่ชัดเจนและตรวจสอบได้</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-muted border border-border">
                    <div className="w-7 h-7 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-mono text-xs font-bold text-amber-600 dark:text-amber-400 flex-shrink-0">
                      E
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-foreground uppercase font-mono">Experience (ประสบการณ์)</h4>
                      <p className="text-xs text-muted mt-0.5">ยกระดับประสิทธิภาพอย่างต่อเนื่องจากกระแสข้อมูลที่เกิดขึ้นจริง</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
