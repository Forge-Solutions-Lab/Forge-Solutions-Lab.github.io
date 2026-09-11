import { useCountUp } from '@/hooks/useCountUp';

const STATS = [
  { value: 95, suffix: '%', label: 'ลดเวลาตรวจสอบ Manual', color: 'text-brand-400' },
  { value: 99, suffix: '.4%', label: 'ความแม่นยำของ AI', color: 'text-accent-400' },
  { value: 300, suffix: 'ms', label: 'เวลาตอบสนองเฉลี่ย', color: 'text-amber-400' },
  { value: 24, suffix: '/7', label: 'ทำงานอัตโนมัติตลอดเวลา', color: 'text-brand-400' },
];

function StatItem({ value, suffix, label, color }: { value: number; suffix: string; label: string; color: string }) {
  const { value: count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <div className={`font-display text-3xl md:text-4xl font-bold ${color}`}>
        {count}
        {suffix}
      </div>
      <p className="text-sm text-ink-300 mt-1">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 border-y border-brand-500/10 bg-ink-900/50">
      <div className="absolute inset-0 grid-bg-fine opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
