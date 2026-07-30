export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container split">
        <div>
          <div className="eyebrow">О питомнике</div>
          <h2>Дом, где собаки живут в семье</h2>
          <div className="rule rule--left">
            <i />
          </div>
          <p>
            «Северное графство» — это не вольеры, а дом под Петербургом. Собаки растут в комнатах,
            спят на диванах и знают, что такое гости, пылесос и детские руки. Поэтому щенок приезжает
            к вам уже готовым к жизни в семье.
          </p>
          <p>
            Мы вяжем редко и только тех собак, что прошли тесты здоровья и получили экспертную оценку
            в ринге. Каждого щенка мы сопровождаем всю жизнь — от первой прививки до вопросов через
            десять лет.
          </p>
          <p className="about__sign">
            Елена Северова
            <br />
            <span className="meta">заводчик, эксперт РКФ</span>
          </p>
          <a className="arrow" href="#contacts">
            Подробнее о нас →
          </a>
        </div>

        <div className="card__thumb ratio-4-3" style={{ borderRadius: "var(--radius-m)" }}>
          <img src="/img/nc-puppies.jpg" alt="Щенки на пледе у окна" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
