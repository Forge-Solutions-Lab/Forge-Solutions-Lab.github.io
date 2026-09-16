import { Cpu, Database, Layout, Server, Terminal } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TECH_CATEGORIES = [
  {
    category: 'AI & Machine Learning',
    icon: Cpu,
    tag: 'Algorithms & Models',
    technologies: [
      { name: 'Python', role: 'Primary ML & Analytics Engine' },
      { name: 'scikit-learn', role: 'Statistical Learning & Concept Induction' },
      { name: 'Concept Learning', role: 'Find-S, Candidate Elimination & Version Space' },
      { name: 'RAG Architecture', role: 'Context Retrieval & Semantic Search' },
      { name: 'Text-to-SQL Engine', role: 'Natural Language to Relational Query' },
      { name: 'LangChain & Agentic AI', role: 'Workflow Orchestration & Decision Loops' },
    ],
  },
  {
    category: 'Data Engineering & Pipeline',
    icon: Database,
    tag: 'Data Architecture',
    technologies: [
      { name: 'Medallion Architecture', role: 'Bronze, Silver & Gold Structured Layers' },
      { name: 'High-throughput ETL/ELT', role: 'Automated Cleaning & Normalization' },
      { name: 'PostgreSQL / Timescale', role: 'Time-series Logs & Relational Storage' },
      { name: 'Vector Databases', role: 'Dense Embeddings & Document Retrieval' },
      { name: 'SQL Optimization', role: 'Sub-second Analytical Query Execution' },
    ],
  },
  {
    category: 'Frontend Engineering',
    icon: Layout,
    tag: 'Client Systems',
    technologies: [
      { name: 'React 18', role: 'Component-driven State Architecture' },
      { name: 'TypeScript', role: 'Strict Typing & Enterprise Reliability' },
      { name: 'Vite', role: 'Next-generation Fast Build Tooling' },
      { name: 'Tailwind CSS', role: 'High-performance Utility Styling' },
      { name: 'Lucide Systems', role: 'Precision Technical Iconography' },
    ],
  },
  {
    category: 'Backend & Infrastructure',
    icon: Server,
    tag: 'Cloud & DevOps',
    technologies: [
      { name: 'FastAPI / Node.js', role: 'Low-latency Asynchronous Microservices' },
      { name: 'Docker Containers', role: 'Consistent Isolated Runtime Deployments' },
      { name: 'AWS Cloud Services', role: 'Scalable Compute, Storage & AI Gateways' },
      { name: 'GitHub Actions', role: 'Automated CI/CD Pipeline & Code Quality' },
      { name: 'RBAC Security Policy', role: 'Enterprise Authorization & Access Control' },
    ],
  },
];

export default function TechStack() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="tech-stack" className="relative py-28 border-t border-white/[0.06] bg-ink-950 overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
            <span className="font-mono text-xs font-semibold text-brand-300 tracking-wider uppercase">
              TECHNOLOGY ECOSYSTEM
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            เทคโนโลยีและเครื่องมือ{' '}
            <span className="text-gradient-cyan">ระดับ Enterprise</span>
          </h2>
          <p className="reveal reveal-delay-2 text-ink-300 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
            โครงสร้างเทคโนโลยีที่ผ่านการคัดสรรเพื่อความเสถียร ความปลอดภัย และประสิทธิภาพสูงสุดในระดับอุตสาหกรรม
          </p>
        </div>

        {/* 2x2 Tech Matrix Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {TECH_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.category}
                className={`reveal reveal-delay-${idx + 1} glass-card rounded-2xl p-7 border-glow-hover flex flex-col justify-between`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-white">{cat.category}</h3>
                    </div>
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-ink-900 text-ink-300 border border-white/[0.06]">
                      {cat.tag}
                    </span>
                  </div>

                  {/* Tech item list */}
                  <div className="space-y-2.5">
                    {cat.technologies.map((t) => (
                      <div
                        key={t.name}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-ink-900/40 border border-white/[0.04] hover:border-white/[0.08] transition-colors"
                      >
                        <span className="font-mono text-xs font-semibold text-white">{t.name}</span>
                        <span className="text-xs text-ink-400 sm:text-right mt-0.5 sm:mt-0 font-sans">{t.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
