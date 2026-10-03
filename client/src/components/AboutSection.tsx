/*
 * CYCLIC ABOUT SECTION — "Structured Clarity"
 * Two-column: left image, right text + feature list
 */

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663512600450/2hVCCbvWSsra45twj8pd8U/cyclic-about-img-oCgni5FZbmc7h5bjAAYemk.webp";

const features = [
  "Back-office System Management",
  "Enhancing Brand Image",
  "User-centric Design",
  "Effective CRM Management",
  "Time and Resource Efficiency",
  "Data-driven Insights",
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Image */}
          <div className="fade-up relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={ABOUT_IMG}
                alt="Cyclic team collaboration"
                className="w-full h-full object-cover"
              />
              {/* Overlay badge */}
              <div
                className="absolute bottom-5 left-5 rounded-xl px-5 py-4"
                style={{
                  background: "rgba(16,46,79,0.92)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p className="text-white font-bold text-sm">We are a Professional</p>
                <p className="text-[#ff5722] font-black text-lg leading-tight">Business Solution</p>
              </div>
            </div>
            {/* Decorative element */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
              style={{ background: "oklch(0.65 0.18 35 / 0.12)" }}
            />
            <div
              className="absolute -top-4 -left-4 w-16 h-16 rounded-xl -z-10"
              style={{ background: "oklch(0.22 0.07 240 / 0.08)" }}
            />
          </div>

          {/* Right: Content */}
          <div>
            <div className="section-label mb-4 fade-up">WHO WE ARE</div>
            <h2
              className="font-bold leading-tight mb-5 fade-up"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(2rem, 4vw, 2.625rem)",
                letterSpacing: "-0.5px",
                color: "#0a1628",
              }}
            >
              เราคือพาร์ทเนอร์
              <br />
              ที่เข้าใจธุรกิจของคุณ
            </h2>
            <p className="text-base leading-relaxed mb-6 fade-up" style={{ color: "#4B5563" }}>
              ที่ CYCLIC เราช่วยเจ้าของธุรกิจมองเห็นภาพรวมขององค์กร วางโครงสร้างการทำงานที่ยั่งยืน
              ออกแบบเว็บไซต์ที่สร้างความเชื่อมั่น และพัฒนาระบบดิจิทัลที่ตอบโจทย์การทำงานจริง
              ทุกบริการอิงจากการวิเคราะห์ข้อมูลเชิงลึก โดยโค้ชที่เชี่ยวชาญด้านการทำธุรกิจ
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 fade-up">
                  <CheckCircle2 size={16} className="flex-shrink-0" style={{ color: "#ff5722" }} />
                  <span className="text-sm font-medium" style={{ color: "#374151" }}>{f}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 fade-up">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary" style={{ background: "#102E4F" }}>
                GET A PROPOSAL
              </a>
              <a href="#works" onClick={(e) => { e.preventDefault(); document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-outline" style={{ color: "#0a1628", borderColor: "#102E4F" }}>
                SEE OUR WORKS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
