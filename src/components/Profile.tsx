import { brand } from "../data/config";

export function Profile() {
  return (
    <header className="profile">
      <img className="profile__logo" src={brand.logo} alt="Logo do Turbo Ofertas" width={112} height={112} />
      <h1 className="profile__name">{brand.name}</h1>
      <p className="profile__slogan">{brand.slogan}</p>
      <p className="profile__desc">{brand.description}</p>

      {brand.highlights && (
        <ul className="profile__highlights">
          {brand.highlights.map((item, idx) => (
            <li key={idx} className="highlight__item">
              <span className="highlight__icon" aria-hidden="true">{item.icon}</span>
              <div className="highlight__text">
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
