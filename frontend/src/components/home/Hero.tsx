export function Hero() {
  return (
    <section className="hero" id="top">
      <img
        src="/img/nc-hero-wide.jpg"
        alt="Кавалер кинг чарльз спаниель и пудель на снегу у усадьбы зимним вечером"
      />
      <div className="container hero__content">
        <div className="eyebrow">Питомник кавалер кинг чарльз спаниелей и пуделей</div>
        <h1>
          Северное
          <br />
          графство
        </h1>
        <div className="hero__slogan">Традиции. Красота. Любовь.</div>
        <a className="btn btn--gold" href="#puppies">
          Смотреть щенков →
        </a>
      </div>
    </section>
  );
}
