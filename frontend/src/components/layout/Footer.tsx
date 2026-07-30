import { isMockApi } from "../../api";
import { useHealth } from "../../api/queries";
import { Crest } from "../ui/Crest";

/** Индикатор состояния API — виден только в режиме разработки. */
function ApiStatus() {
  const health = useHealth();
  const state = health.isPending
    ? "проверяем…"
    : health.isError
      ? "недоступен"
      : health.data.status;

  return (
    <span>
      API: {state} {isMockApi && "· данные из моков"}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer__cols">
          <div>
            <div className="header__brand" style={{ marginBottom: 14 }}>
              <Crest size={34} />
              <span style={{ fontSize: 20 }}>Северное графство</span>
            </div>
            <p className="footer__slogan">
              Где верность становится традицией,
              <br />а любовь — наследием.
            </p>
          </div>

          <div>
            <h4>Разделы</h4>
            <p>
              <a href="#dogs">Наши собаки</a>
              <br />
              <a href="#puppies">Щенки</a>
              <br />
              <a href="#about">О питомнике</a>
              <br />
              <a href="#news">Новости</a>
            </p>
          </div>

          <div>
            <h4>Контакты</h4>
            <p>
              +7 (921) 123-45-67
              <br />
              severnoe.grafstvo@gmail.com
              <br />
              Санкт-Петербург и ЛО
            </p>
          </div>

          <div>
            <h4>Мы в сетях</h4>
            <div className="footer__soc">
              <a href="#top">IG</a>
              <a href="#top">VK</a>
              <a href="#top">TG</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© Северное графство, {new Date().getFullYear()}. Все права защищены.</span>
          {import.meta.env.DEV ? <ApiStatus /> : <a href="#top">Политика конфиденциальности</a>}
        </div>
      </div>
    </footer>
  );
}
