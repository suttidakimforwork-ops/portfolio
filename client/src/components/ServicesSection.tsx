/*
 * CYCLIC SERVICES SECTION — "Structured Clarity"
 * Light gray background, 2-col grid cards with icon + text
 * Orange left border on hover
 */

import { useEffect, useRef } from "react";
import {
  TrendingUp,
  Globe,
  Cpu,
  BarChart3,
  Layers,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Business Growth",
    titleTh: "กลยุทธ์ธุรกิจ",
    desc: "บริการโค้ชชิ่งและกลยุทธ์ธุรกิจ ที่ช่วยให้เจ้าของกิจการมองเห็นภาพรวมธุรกิจอย่างเป็นระบบ",
  },
  {
    icon: Globe,
    title: "Website Development",
    titleTh: "พัฒนาเว็บไซต์",
    desc: "สร้างเว็บไซต์ด้วย Template ที่ถูกออกแบบ ให้ตอบโจทย์ทั้งผู้ใช้งานและเป้าหมายธุรกิจ",
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    titleTh: "โซลูชัน AI",
    desc: "พัฒนาระบบ AI เฉพาะทางสำหรับธุรกิจ ช่วยลดต้นทุน เพิ่มประสิทธิภาพ และตัดสินใจบนข้อมูลจริง",
  },
  {
    icon: BarChart3,
    title: "Digital Solution",
    titleTh: "ดิจิทัลโซลูชัน",
    desc: "ออกแบบและพัฒนาระบบดิจิทัลครบวงจร ตั้งแต่ Front-end ไปจนถึง Back-end ที่แข็งแกร่ง",
  },
  {
    icon: Layers,
    title: "Branding & Profile",
    titleTh: "แบรนด์ดิ้ง",
    desc: "พัฒนาแนวทางและภาพลักษณ์ของแบรนด์ให้ชัดเจน สื่อสารตัวตนธุรกิจได้อย่างน่าเชื่อถือ",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    titleTh: "อีคอมเมิร์ซ",
    desc: "พัฒนาระบบขายออนไลน์ที่ครบครัน ตั้งแต่ UX/UI ไปจนถึงระบบจัดการสินค้าและการชำระเงิน",
  },
];

export default function ServicesSection() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24" style={{ background: "#F7F8FA" }} ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="section-label mb-4 fade-up">WHAT WE DO</div>
            <h2
              className="font-bold leading-tight fade-up"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2rem, 4vw, 2.625rem)", letterSpacing: "-0.5px", color: "#0a1628" }}
            >
              Our Services
            </h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="fade-up text-sm font-semibold flex items-center gap-1.5 self-start md:self-auto"
            style={{ color: "#ff5722" }}
          >
            EXPLORE ALL SERVICES →
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="service-card fade-up bg-white rounded-xl p-6"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.22 0.07 240 / 0.07)" }}
                >
                  <Icon size={22} style={{ color: "#0a1628" }} />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#ff5722" }}>
                  {s.titleTh}
                </p>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#0a1628" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
