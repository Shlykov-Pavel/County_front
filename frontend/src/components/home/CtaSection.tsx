/**
 * Форма пока не отправляется: POST /api/requests появится вместе
 * с бэкендом, тогда сюда добавится useMutation.
 */
export function CtaSection() {
  return (
    <section className="section section--dark">
      <div className="container corners">
        <div className="split">
          <div>
            <div className="eyebrow">Заявка</div>
            <h2>Хотите щенка из «Северного графства»?</h2>
            <p className="muted" style={{ marginTop: 14 }}>
              Напишите пару слов о себе — какая порода интересна, есть ли опыт, живёте ли в квартире
              или доме. Мы ответим в течение дня и расскажем о ближайших помётах.
            </p>
          </div>

          <form onSubmit={(event) => event.preventDefault()}>
            <div className="field">
              <label htmlFor="cta-name">Имя</label>
              <input id="cta-name" name="name" placeholder="Как к вам обращаться" />
            </div>
            <div className="field">
              <label htmlFor="cta-contact">Телефон или телеграм</label>
              <input id="cta-contact" name="contact" placeholder="+7 ___ ___-__-__" />
            </div>
            <div className="field">
              <label htmlFor="cta-message">Комментарий</label>
              <textarea id="cta-message" name="message" placeholder="Интересует кавалер, девочка" />
            </div>
            <button className="btn btn--gold" type="submit">
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
