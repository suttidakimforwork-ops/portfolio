/*
 * CYCLIC SOLUTIONS SECTION — "Structured Clarity"
 * 3-column cards: Start / Grow / Sustain
 * Navy background, white cards with orange accents
 */

import { useEffect, useRef } from "react";
import { Rocket, TrendingUp, Shield } from "lucide-react";

const solutions = [
  {
    icon: Rocket,
    step: "01",
    title: "START",
    titleTh: "เริ่มต้น",
    desc: "สำหรับธุรกิจที่อยู่ในช่วงเริ่มต้น เรามีทีมงานพร้อมที่ปรึกษาธุรกิจ เพื่อช่วยวางแผนระบบโครงสร้างให้แข็งแกร่งและช่วยเจาะจงเป้าหมายที่ชัดเจนมากขึ้น",
    highlight: "วางรากฐานที่แข็งแกร่ง",
  },
  {
    icon: TrendingUp,
    step: "02",
    title: "GROW",
    titleTh: "เติบโต",
    desc: "หากคุณมีธุรกิจอยู่แล้ว Cyclic สามารถช่วยอุดรอยรั่ว ปรับปรุงจุดอ่อน เพิ่มประสิทธิภาพจุดแข็ง โดยมุ่งเน้นการเพิ่มยอดขายและส่งเสริมการเติบโต",
    highlight: "เพิ่มยอดขายและขยายธุรกิจ",
  },
  {
    icon: Shield,
    step: "03",
    title: "SUSTAIN",
    titleTh: "ยั่งยืน",
    desc: "การนำพาธุรกิจของคุณไปสู่เป้าหมายที่ตั้งไว้ ด้วยเครื่องมือที่ช่วยลดต้นทุนและกลยุทธ์ที่เรามีในทุก ๆ ด้านอย่างเต็มรูปแบบ",
    highlight: "สร้างความยั่งยืนระยะยาว",
  },
];

export default function SolutionsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solutions"
      className="py-24 relative overflow-hidden"
      style={{ background: "#102E4F" }}
      ref={ref}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/3"
        style={{ background: "#ff5722", filter: "blur(80px)" }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mb-4 fade-up inline-flex" style={{ background: "rgba(255,87,34,0.15)", borderColor: "rgba(255,87,34,0.4)", color: "#ff8a65" }}>
            OUR SOLUTIONS
          </div>
          <h2
            className="font-bold leading-tight text-white fade-up"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2rem, 4vw, 2.625rem)", letterSpacing: "-0.5px" }}
          >
            Let's Make Your Business
            <br />
            <span style={{ color: "#ff5722" }}>Go Future & Substantial</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="fade-up rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "0.8px solid rgba(255,87,34,0.4)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255,87,34,0.15)" }}
                  >
                    <Icon size={22} style={{ color: "#ff5722" }} />
                  </div>
                  <span
                    className="text-5xl font-black leading-none"
                    style={{ color: "rgba(255,255,255,0.06)" }}
                  >
                    {s.step}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#ff5722" }}>
                    {s.titleTh}
                  </p>
                  <h3 className="text-white font-black text-2xl mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {s.desc}
                  </p>
                </div>
                <div
                  className="mt-auto pt-4 border-t text-xs font-semibold"
                  style={{ borderColor: "rgba(255,255,255,0.1)", color: "#ff5722" }}
                >
                  {s.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center fade-up">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-base px-8 py-3.5"
          >
            GET A PROPOSAL
          </button>
        </div>
      </div>
    </section>
  );
}
