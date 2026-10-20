import { brand } from "../data/config";

export function Highlights() {
  if (!brand.highlights || brand.highlights.length === 0) return null;

  return (
    <section className="highlights-section" aria-labelledby="highlights-title">
      <div className="section-header">
        <span className="section-eyebrow">Diferenciais da Comunidade</span>
        <h3 id="highlights-title" className="section-title">
          Por que mais de centenas de motoristas já entraram?
        </h3>
      </div>
      <ul className="highlights-list">
        {brand.highlights.map((item, idx) => (
          <li key={idx} className="highlight-item">
            <span className="highlight-item__icon" aria-hidden="true">
              {item.icon}
            </span>
            <div className="highlight-item__content">
              <strong className="highlight-item__title">{item.title}</strong>
              <span className="highlight-item__desc">{item.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
