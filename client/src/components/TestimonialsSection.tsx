/*
 * CYCLIC TESTIMONIALS SECTION — "Structured Clarity"
 * Horizontal scrollable cards with orange left border
 * Auto-scroll carousel
 */

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "ใช้บริการ consult และเว็บไซต์กับ cyclic มา 2 ปี ประทับใจในความจริงใจ มืออาชีพสุดๆ เหมือนได้เพื่อนที่เป็นทุกอย่างในการช่วยให้ธุรกิจก้าวไปในทางที่เราต้องการจริงๆ",
    name: "คุณหมอเจี๊ยบ",
    fullName: "แพทย์หญิงอัญชลี อมรรุ่งมีธรรม",
    company: "Anjali Clinic",
    avatar: "อ",
  },
  {
    quote: "ทีมงานให้คำปรึกษาดี แนะนำขั้นตอนให้คนที่ไม่รู้เรื่องเทคนิคหรือระบบงาน IT ให้เข้าใจได้ ติดตามงานดี ไม่ทิ้งงาน รูปแบบดีไซน์สวยสั่งได้",
    name: "คุณจูน",
    fullName: "ถวัญญ์ณัส ชีพอารนัย",
    company: "มหาทรัพย์กฤษณ์",
    avatar: "จ",
  },
  {
    quote: "การดูแลเอาใจใส่ของที่นี่ยิ่งกว่าเราเป็นลูกค้า เหมือนเราได้เพื่อนใหม่ เป็นที่ปรึกษาที่จริงใจ มีความเอาใจใส่ และมีความเป็นมืออาชีพ",
    name: "คุณหมอฝ้าย",
    fullName: "แพทย์หญิงกษิรา เขมพิทักษ์",
    company: "Artistry Clinic",
    avatar: "ฝ",
  },
  {
    quote: "ตัวเว็บไซต์ออกแบบทันสมัย ใช้งานง่าย รูปภาพตกแต่งอย่างเหมาะสม จัดวาง Layout ดูง่ายไม่ซับซ้อน ตอบโจทย์ลูกค้าได้ดี",
    name: "คุณเก่ง",
    fullName: "ลัดดาวัลย์ ชดช้อย",
    company: "CC Auto Part & Renella",
    avatar: "ก",
  },
  {
    quote: "รู้สึกคุ้มค่ามาก จ้างทำเว็บไซต์เหมือนได้ที่ปรึกษาธุรกิจไปด้วย น้องๆ ทีมงานติดตามงานให้ความช่วยเหลือตลอด ทำให้วางใจได้",
    name: "คุณนิด",
    fullName: "ภัทรวดี ชิตประไพ",
    company: "EStelle Solar",
    avatar: "น",
  },
  {
    quote: "ทีม Cyclic เป็นมืออาชีพมากครับ มีการวางแผนที่ดี สามารถตอบสนองความต้องการลูกค้าได้ดี หา Solution ร่วมกันเพื่อให้งานออกมาตามที่ต้องการได้",
    name: "คุณปิง",
    fullName: "อภิชาติ เจริญคติธรรม",
    company: "The Beef Hero",
    avatar: "ป",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
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

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  // Show 3 at a time on desktop
  const getVisible = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(current + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section className="py-24" style={{ background: "#F7F8FA" }} ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div
              className="section-label mb-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              TESTIMONIALS
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
              What Our Clients Say
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
              style={{ borderColor: "#E5E7EB", color: "#0a1628" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#102E4F";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#102E4F";
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
              style={{ borderColor: "#E5E7EB", color: "#0a1628" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#102E4F";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#102E4F";
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {getVisible().map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="testimonial-card bg-white rounded-xl p-6 flex flex-col gap-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease ${i * 0.1 + 0.2}s, transform 0.5s ease ${i * 0.1 + 0.2}s`,
              }}
            >
              <Quote size={24} style={{ color: "#ff5722", opacity: 0.6 }} />
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#374151" }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: "#F3F4F6" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: "#102E4F" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#0a1628" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#9CA3AF" }}>{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                background: i === current ? "#ff5722" : "#D1D5DB",
                border: "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
