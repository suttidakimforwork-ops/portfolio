/*
 * CYCLIC WORKS SECTION — "Structured Clarity"
 * Masonry-style card grid with project mockup images
 * Hover: lift + scale image
 */

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const WORK1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663512600450/2hVCCbvWSsra45twj8pd8U/cyclic-work1-mXtnJppWW78KquJsSxqGR9.webp";
const WORK2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663512600450/2hVCCbvWSsra45twj8pd8U/cyclic-work2-4xLFqVJZ942kQB3gGP8h8u.webp";

const works = [
  {
    title: "Wawell Decor",
    category: "Software Development",
    type: "Luxury Tiles Website",
    img: WORK1,
    tag: "E-Commerce",
    color: "#0a1628",
  },
  {
    title: "Popperty",
    category: "Software Development",
    type: "Personal Branding Website",
    img: WORK2,
    tag: "Branding",
    color: "#1a3d5c",
  },
  {
    title: "Okiko Website",
    category: "Software Development",
    type: "E-Commerce Website",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tag: "E-Commerce",
    color: "#0f2a47",
  },
  {
    title: "Wangtoakang",
    category: "Software Development",
    type: "E-Commerce Website",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tag: "Web App",
    color: "#0a1628",
  },
];

export default function WorksSection() {
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
    <section id="works" className="py-24 bg-white" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="section-label mb-4 fade-up">OUR WORKS</div>
            <h2
              className="font-bold leading-tight fade-up"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2rem, 4vw, 2.625rem)", letterSpacing: "-0.5px", color: "#0a1628" }}
            >
              Projects That Drive Growth
            </h2>
            <p className="text-sm mt-2 fade-up" style={{ color: "#6B7280" }}>
              Big idea brought to business
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="fade-up text-sm font-semibold flex items-center gap-1.5 self-start md:self-auto"
            style={{ color: "#ff5722" }}
          >
            FIND MORE OUR WORKS →
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {works.map((w, i) => (
            <div key={w.title} className={`work-card fade-up rounded-xl overflow-hidden bg-white border border-gray-100 ${i === 0 ? "lg:col-span-2" : ""}`}>
              <div className="relative overflow-hidden" style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}>
                <img
                  src={w.img}
                  alt={w.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 flex items-end p-4"
                  style={{
                    background: "linear-gradient(to top, rgba(16,46,79,0.85) 0%, transparent 60%)",
                  }}
                >
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: "#ff5722", color: "white" }}
                  >
                    {w.tag}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#ff5722" }}>
                  {w.category}
                </p>
                <h3 className="font-bold text-base mb-0.5" style={{ color: "#0a1628" }}>
                  {w.title}
                </h3>
                <p className="text-sm" style={{ color: "#9CA3AF" }}>{w.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
