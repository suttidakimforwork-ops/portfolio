/*
 * CYCLIC STATS SECTION — "Structured Clarity"
 * Navy background, orange numbers, white text
 * Count-up animation on viewport entry
 */

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 50, suffix: "+", label: "Projects Delivered", labelTh: "โปรเจกต์ที่ส่งมอบ" },
  { num: 32, suffix: "+", label: "Happy Clients", labelTh: "ลูกค้าที่พึงพอใจ" },
  { num: 15, suffix: "+", label: "Business Research", labelTh: "งานวิจัยธุรกิจ" },
  { num: 23, suffix: "+", label: "Apps Built", labelTh: "แอปที่พัฒนาแล้ว" },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatItem({ num, suffix, label, labelTh, active }: typeof stats[0] & { active: boolean }) {
  const count = useCountUp(num, 1600, active);
  return (
    <div className="flex flex-col items-center text-center px-6 py-8">
      <div className="stat-number mb-1">
        {count}{suffix}
      </div>
      <p className="text-white font-semibold text-sm">{label}</p>
      <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{labelTh}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-4"
      style={{ background: "#102E4F" }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
