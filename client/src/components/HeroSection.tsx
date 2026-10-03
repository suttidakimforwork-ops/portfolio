/*
 * CYCLIC HERO SECTION — "Structured Clarity"
 * Full-viewport navy hero with network background
 * Left-heavy layout: big headline + description + CTAs
 * Right side: floating stats card
 */

import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663512600450/2hVCCbvWSsra45twj8pd8U/cyclic-hero-bg-TcgYapZDfiLimswZDs8cSf.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWorks = () => {
    document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#102E4F" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          opacity: 0.45,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(16,46,79,0.92) 0%, rgba(16,46,79,0.7) 60%, rgba(16,46,79,0.85) 100%)",
        }}
      />

      {/* Scrolling ticker */}
      <div
        className="absolute top-0 left-0 right-0 overflow-hidden"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", height: "2.5rem" }}
      >
        <div className="marquee-track flex items-center h-full whitespace-nowrap">
          {Array(8).fill(null).map((_, i) => (
            <span
              key={i}
              className="text-xs font-semibold tracking-widest uppercase mx-6"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              BUSINESS GROWTH &nbsp;✦&nbsp; DIGITAL SOLUTION &nbsp;✦&nbsp; WEBSITE DEVELOPMENT &nbsp;✦&nbsp; AI SOLUTION &nbsp;✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: headline */}
          <div>
            <div
              className="section-label mb-6"
              style={{
                background: "rgba(255,87,34,0.15)",
                borderColor: "rgba(255,87,34,0.4)",
                color: "#ff8a65",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
              }}
            >
              DIGITAL TRANSFORMATION & AI SOLUTION
            </div>

            <h1
              className="text-white font-black leading-[1.05] mb-6"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5.4rem)", /* Figma: 86.4px = 5.4rem */
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
              }}
            >
              WE PROVIDE
              <br />
              <span style={{ color: "#ff5722" }}>COMPREHENSIVE</span>
              <br />
              BUSINESS
              <br />
              SOLUTIONS
            </h1>

            <p
              className="text-base leading-relaxed mb-8 max-w-lg"
              style={{
                color: "rgba(255,255,255,0.72)",
                fontFamily: "'DM Sans', 'Noto Sans Thai', sans-serif",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s",
              }}
            >
              ที่ CYCLIC เราช่วยเจ้าของธุรกิจมองเห็นภาพรวมขององค์กร วางโครงสร้างการทำงานที่ยั่งยืน
              ออกแบบเว็บไซต์ที่สร้างความเชื่อมั่น และพัฒนาระบบดิจิทัลที่ตอบโจทย์การทำงานจริง
            </p>

            <div
              className="flex flex-wrap gap-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s",
              }}
            >
              <button onClick={scrollToServices} className="btn-primary">
                EXPLORE SERVICES <ArrowRight size={15} />
              </button>
              <button onClick={scrollToWorks} className="btn-outline">
                SEE OUR WORKS
              </button>
            </div>
          </div>

          {/* Right: floating stats */}
          <div
            className="hidden lg:flex flex-col gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
            }}
          >
            <div
              className="rounded-xl p-6 grid grid-cols-2 gap-5"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(16px)",
              }}
            >
              {[
                { num: "50+", label: "Projects Delivered" },
                { num: "32+", label: "Happy Clients" },
                { num: "15+", label: "Business Research" },
                { num: "23+", label: "Apps Built" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="stat-number">{stat.num}</span>
                  <span className="text-xs font-medium tracking-wide uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-5 flex items-center gap-4"
              style={{
                background: "rgba(255,87,34,0.12)",
                border: "1px solid rgba(255,87,34,0.25)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="w-10 h-10 rounded-full bg-[#ff5722] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-sm">CY</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Strategy + Design + Technology</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                  ครบจบในทีมเดียว ไม่ต้องจ้าง 3 บริษัท
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 group"
        style={{ color: "rgba(255,255,255,0.4)", background: "none", border: "none" }}
      >
        <span className="text-xs tracking-widest uppercase font-medium group-hover:text-white/70 transition-colors">
          Scroll
        </span>
        <ChevronDown
          size={18}
          className="animate-bounce"
          style={{ color: "rgba(255,255,255,0.4)" }}
        />
      </button>
    </section>
  );
}
