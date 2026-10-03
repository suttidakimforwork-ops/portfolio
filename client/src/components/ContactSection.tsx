/*
 * CYCLIC CONTACT SECTION — "Structured Clarity"
 * White background, clean form, navy + orange accents
 */

import { useState, useEffect, useRef } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const services = [
  "Business Consulting",
  "Marketing Research",
  "Business Intelligence",
  "Software Development",
  "Website",
  "AI Solutions",
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
    service: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", tel: "", message: "", service: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: info */}
          <div>
            <div
              className="section-label mb-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              CONTACT US
            </div>
            <h2
              className="font-bold leading-tight mb-5"
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
              Start What You Have
              <br />
              <span style={{ color: "#ff5722" }}>In Mind</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{
                color: "#6B7280",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease 0.2s",
              }}
            >
              Consult with Cy-click — เราพร้อมรับฟังและช่วยออกแบบโซลูชันที่เหมาะกับธุรกิจของคุณโดยเฉพาะ
            </p>

            {/* Contact info */}
            <div
              className="flex flex-col gap-4"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease 0.3s",
              }}
            >
              {[
                { label: "Website", value: "www.cyclic.co.th", href: "https://www.cyclic.co.th" },
                { label: "Facebook", value: "Cyclic Co., Ltd.", href: "https://www.facebook.com/profile.php?id=100091731871308" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: "oklch(0.22 0.07 240 / 0.08)", color: "#0a1628" }}
                  >
                    {item.label[0]}
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#9CA3AF" }}>{item.label}</p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold hover:underline"
                      style={{ color: "#0a1628" }}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <div
              className="mt-10 p-6 rounded-2xl"
              style={{
                background: "#102E4F",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease 0.4s",
              }}
            >
              <p className="text-white font-black text-xl leading-tight mb-2">
                Empowering Your Business
              </p>
              <p className="font-bold" style={{ color: "#ff5722" }}>
                Enhancing Your Success.
              </p>
              <p className="text-sm mt-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                Unleash the client's potential for growth, innovation and transformation.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "#F7F8FA",
              border: "1px solid #E5E7EB",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <CheckCircle2 size={48} style={{ color: "#ff5722" }} />
                <h3 className="font-bold text-xl" style={{ color: "#0a1628" }}>ส่งข้อความสำเร็จ!</h3>
                <p className="text-sm text-center" style={{ color: "#6B7280" }}>
                  ทีมงาน Cyclic จะติดต่อกลับหาคุณโดยเร็วที่สุด
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#374151" }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ชื่อ-นามสกุล"
                      className="form-input"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#374151" }}>
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      className="form-input"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#374151" }}>
                    Tel
                  </label>
                  <input
                    type="tel"
                    placeholder="เบอร์โทรศัพท์"
                    className="form-input"
                    value={form.tel}
                    onChange={(e) => setForm({ ...form, tel: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#374151" }}>
                    Interested Service
                  </label>
                  <select
                    className="form-input"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select interested service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#374151" }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="บอกเราเกี่ยวกับโปรเจกต์ของคุณ..."
                    className="form-input resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary justify-center mt-2 py-3.5">
                  <Send size={16} />
                  GET A PROPOSAL
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
