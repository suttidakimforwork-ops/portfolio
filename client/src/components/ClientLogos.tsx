/*
 * CYCLIC CLIENT LOGOS — "Structured Clarity"
 * Scrolling marquee of client names / brand logos
 * White background, subtle gray text
 */

const clients = [
  "Anjali Clinic",
  "Artistry Clinic",
  "Wawell Decor",
  "Popperty",
  "EStelle Solar",
  "The Beef Hero",
  "Okiko",
  "Wangtoakang",
  "CC Auto Part",
  "มหาทรัพย์กฤษณ์",
];

export default function ClientLogos() {
  const doubled = [...clients, ...clients];

  return (
    <section className="overflow-hidden" style={{ background: "white", borderTop: "1px solid #F3F4F6", borderBottom: "1px solid #F3F4F6", paddingTop: "33px", paddingBottom: "33px" }}>
      <div className="flex items-center gap-3 mb-4 container">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#9CA3AF", whiteSpace: "nowrap" }}>
          TRUSTED BY
        </span>
        <div className="flex-1 h-px" style={{ background: "#F3F4F6" }} />
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-track flex items-center gap-10">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "#ff5722" }}
              />
              <span
                className="text-sm font-semibold whitespace-nowrap"
                style={{ color: "#9CA3AF" }}
              >
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
