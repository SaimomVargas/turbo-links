import { brand } from "../data/config";

export function Highlights() {
  if (!brand.highlights || brand.highlights.length === 0) return null;

  return (
    <ul className="profile__highlights" aria-label="Diferenciais">
      {brand.highlights.map((item, idx) => (
        <li key={idx} className="highlight__item">
          <span className="highlight__icon" aria-hidden="true">
            {item.icon}
          </span>
          <div className="highlight__text">
            <strong>{item.title}</strong>
            <span>{item.desc}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
