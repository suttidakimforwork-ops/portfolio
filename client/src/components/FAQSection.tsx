/*
 * CYCLIC FAQ SECTION — "Structured Clarity"
 * Accordion-style Q&A, clean white background
 */

import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Cyclic ให้บริการประเภทใดบ้าง?",
    a: "CYCLIC ให้บริการครบวงจรสำหรับเจ้าของธุรกิจที่ต้องการเติบโตอย่างเป็นระบบ ครอบคลุมตั้งแต่การวางกลยุทธ์ธุรกิจ การออกแบบเว็บไซต์ที่สร้างผลลัพธ์ ไปจนถึงการพัฒนาซอฟต์แวร์และระบบภายใน ทุกบริการผสานกันอย่างเป็นระบบ เพื่อช่วยให้ธุรกิจทำงานได้ราบรื่น มีข้อมูลรองรับ และเติบโตได้จริง",
  },
  {
    q: "CYCLIC จะช่วยคุณได้อย่างไร?",
    a: "เราไม่ได้แค่ให้คำแนะนำ แต่ช่วยออกแบบระบบธุรกิจที่เหมาะกับเป้าหมายของคุณอย่างแท้จริง ไม่ว่าจะเป็นการสร้างโครงสร้างการทำงานสำหรับทีม การยกระดับแบรนด์ด้วยเว็บไซต์ที่สื่อสารชัดเจน หรือพัฒนาระบบดิจิทัลเพื่อให้ธุรกิจเดินได้เอง",
  },
  {
    q: "คุณจะได้อะไรจากการทำงานร่วมกับ CYCLIC?",
    a: "เมื่อทำงานร่วมกับ CYCLIC คุณจะได้รับมากกว่าแค่บริการ แต่คือระบบธุรกิจที่ทำงานได้จริง ตั้งแต่ความชัดเจนด้านกลยุทธ์ การออกแบบเว็บไซต์ที่สื่อสารตรงจุด ไปจนถึงระบบภายในที่ช่วยลดงานซ้ำซ้อนของทีม",
  },
  {
    q: "ทำไมควรเลือกทีมผู้เชี่ยวชาญจาก CYCLIC?",
    a: "เพราะเราเข้าใจโลกธุรกิจจากมุมของเจ้าของธุรกิจจริงๆ ทีมของเรามีทั้งประสบการณ์ด้านการโค้ชชิ่ง การวางกลยุทธ์องค์กร การออกแบบเว็บไซต์ และการพัฒนาระบบดิจิทัล เราผสมผสานมุมมองของ Marketing, UX, Data และ System Architecture",
  },
  {
    q: "CYCLIC แตกต่างจากเอเจนซี่และที่ปรึกษาทั่วไปอย่างไร?",
    a: "เราคือรูปแบบใหม่ของบริษัทที่ผสาน Strategy + Design + Technology เข้าด้วยกันในทีมเดียว แทนที่คุณต้องจ้าง 3 บริษัทเพื่อทำ 3 อย่าง ทีมของเราทำงานร่วมกับคุณแบบ Partner ไม่ใช่ Vendor",
  },
  {
    q: "การทำงานกับ CYCLIC มีค่าใช้จ่ายอย่างไร?",
    a: "ค่าใช้จ่ายขึ้นอยู่กับประเภทของบริการและความต้องการเฉพาะของแต่ละโครงการ เรามีการประเมินราคาอย่างโปร่งใสและให้คำปรึกษาเพื่อเสนอแผนการทำงานที่ตรงกับงบประมาณและเป้าหมายของคุณ",
  },
];

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24" style={{ background: "#F7F8FA" }} ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div
              className="section-label mb-4 inline-flex"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            >
              FAQ
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
              Questions & Answers
            </h2>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item bg-white rounded-xl overflow-hidden"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${i * 0.07 + 0.2}s, transform 0.5s ease ${i * 0.07 + 0.2}s`,
                  border: "1px solid #E5E7EB",
                  borderLeft: open === i ? "3px solid #ff5722" : "3px solid transparent",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-transparent border-none"
                  style={{ cursor: "pointer" }}
                >
                  <span className="font-semibold text-sm" style={{ color: "#0a1628" }}>
                    <span className="font-black mr-2" style={{ color: "#ff5722" }}>
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0">
                    {open === i ? (
                      <Minus size={16} style={{ color: "#ff5722" }} />
                    ) : (
                      <Plus size={16} style={{ color: "#9CA3AF" }} />
                    )}
                  </div>
                </button>
                <div
                  style={{
                    maxHeight: open === i ? "300px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
