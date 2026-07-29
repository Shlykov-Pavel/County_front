const entries = [
  {
    href: "#dogs",
    title: "Наши собаки",
    text: "Производители: здоровье, породность и характер.",
    img: "/img/nc-dog-ckcs.jpg",
    alt: "Кавалер кинг чарльз спаниель",
  },
  {
    href: "#puppies",
    title: "Щенки",
    text: "Актуальные помёты, планы вязок и свободные малыши.",
    img: "/img/nc-puppies.jpg",
    alt: "Щенки в корзине",
  },
  {
    href: "#about",
    title: "О питомнике",
    text: "Наша история, принципы разведения и забота о каждом.",
    img: "/img/nc-hero.jpg",
    alt: "Дом питомника зимой",
  },
];

/** Три входа в основные разделы — сразу под первым экраном. */
export function Entries() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="grid grid--3">
          {entries.map((entry) => (
            <a className="card" key={entry.href} href={entry.href}>
              <div className="card__thumb ratio-4-3">
                <img src={entry.img} alt={entry.alt} />
              </div>
              <div className="card__body center">
                <h3>{entry.title}</h3>
                <p className="meta">{entry.text}</p>
                <span className="arrow">Перейти в раздел →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
