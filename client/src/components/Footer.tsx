/*
 * CYCLIC FOOTER — "Structured Clarity" Redesign
 * Navy background, 4-column grid: brand / company / services / contact
 * Link color #8b9ab0, Instagram added
 */

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#102E4F" }}>
      {/* Main footer */}
      <div className="container py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-[10px] bg-[#ff5722] flex items-center justify-center text-white font-black text-sm">
                CY
              </div>
              <span className="text-white font-black text-xl tracking-wide">CYCLIC</span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#8b9ab0" }}>
              Digital Transformation & AI Solution. Unleash your potential for growth, innovation and transformation.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=100091731871308"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-lg transition-colors"
                style={{ background: "rgba(255,255,255,0.07)", color: "#8b9ab0" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.14)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
              >
                FB
              </a>
              <a
                href="https://www.instagram.com/cyclic.co.th"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-lg transition-colors"
                style={{ background: "rgba(255,255,255,0.07)", color: "#8b9ab0" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.14)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
              >
                IG
              </a>
              <a
                href="https://www.cyclic.co.th"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-lg transition-colors"
                style={{ background: "rgba(255,255,255,0.07)", color: "#8b9ab0" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.14)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
              >
                LINE
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Who We Are", href: "#about" },
                { label: "Our Works", href: "#works" },
                { label: "Blog", href: "#blog" },
                { label: "Career", href: "#career" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm bg-transparent border-none p-0 transition-colors"
                    style={{ color: "#8b9ab0" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8b9ab0")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Branding",
                "Company Profile",
                "Website Starter",
                "Custom Website",
                "Web Application",
                "AI Solutions",
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-sm bg-transparent border-none p-0 transition-colors text-left"
                    style={{ color: "#8b9ab0" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8b9ab0")}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>Email</p>
                <a
                  href="mailto:hello@cyclic.co.th"
                  className="text-sm transition-colors"
                  style={{ color: "#8b9ab0" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8b9ab0")}
                >
                  hello@cyclic.co.th
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>Website</p>
                <a
                  href="https://www.cyclic.co.th"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors"
                  style={{ color: "#8b9ab0" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8b9ab0")}
                >
                  www.cyclic.co.th
                </a>
              </li>
              <li className="mt-2">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="btn-primary text-xs py-2 px-5"
                >
                  CONTACT US
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {year} Cyclic Co., Ltd. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-xs transition-colors"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#8b9ab0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              Company Profile
            </a>
            <a
              href="#"
              className="text-xs transition-colors"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#8b9ab0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              Catalog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
