/*
 * CYCLIC PROCESS SECTION — "Structured Clarity"
 * Horizontal step-by-step process
 * Clean white background, numbered steps with connecting line
 */

import { useEffect, useRef, useState } from "react";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Discover",
    titleTh: "วิเคราะห์",
    desc: "ทำความเข้าใจธุรกิจ เป้าหมาย และกลุ่มเป้าหมายของคุณอย่างลึกซึ้ง",
  },
  {
    icon: Lightbulb,
    num: "02",
    title: "Strategize",
    titleTh: "วางกลยุทธ์",
    desc: "ออกแบบแผนงานที่ชัดเจน ตั้งแต่ UX/UI ไปจนถึงโครงสร้างระบบ",
  },
  {
    icon: Code2,
    num: "03",
    title: "Build",
    titleTh: "พัฒนา",
    desc: "ลงมือพัฒนาด้วยทีมผู้เชี่ยวชาญ พร้อมอัปเดตความคืบหน้าตลอด",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Launch & Grow",
    titleTh: "เปิดตัวและเติบโต",
    desc: "ส่งมอบผลงาน พร้อมดูแลและพัฒนาต่อเนื่องให้ธุรกิจเติบโต",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="section-label mb-4 inline-flex"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            HOW WE WORK
          </div>
          <h2
            className="font-bold leading-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(2rem, 4vw, 2.625rem)",
              letterSpacing: "-0.5px",
              color: "#0a1628",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
            }}
          >
            Our Working Process
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-10 left-[12.5%] right-[12.5%] h-px hidden lg:block"
            style={{ background: "linear-gradient(to right, #ff5722, #102E4F)" }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="flex flex-col items-center text-center relative"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.5s ease ${i * 0.12 + 0.2}s, transform 0.5s ease ${i * 0.12 + 0.2}s`,
                }}
              >
                {/* Icon circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-5 relative z-10"
                  style={{
                    background: i === 0 ? "#ff5722" : i === 3 ? "#102E4F" : "white",
                    border: `2px solid ${i === 0 ? "#ff5722" : i === 3 ? "#102E4F" : "#E5E7EB"}`,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  }}
                >
                  <Icon
                    size={26}
                    style={{ color: i === 0 || i === 3 ? "white" : "#102E4F" }}
                  />
                </div>

                <span
                  className="text-xs font-black tracking-widest mb-1"
                  style={{ color: "#ff5722" }}
                >
                  {step.num}
                </span>
                <h3 className="font-bold text-base mb-1" style={{ color: "#0a1628" }}>
                  {step.title}
                </h3>
                <p className="text-xs font-semibold mb-2" style={{ color: "#ff5722" }}>
                  {step.titleTh}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
