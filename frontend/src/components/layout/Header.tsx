import { useState } from "react";

import { Crest } from "../ui/Crest";

/**
 * Пока страница одна, пункты меню ведут к секциям главной.
 * Когда появится роутер, здесь поменяются только href.
 */
const navLeft = [
  { href: "#dogs", label: "Наши собаки" },
  { href: "#puppies", label: "Щенки" },
  { href: "#about", label: "О питомнике" },
];

const navRight = [
  { href: "#news", label: "Новости" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__bar">
        <nav className="header__nav">
          {navLeft.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header__brand" href="#top">
          <Crest />
          <span>Северное графство</span>
        </a>

        <nav className="header__nav header__nav--right">
          {navRight.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="header__burger"
          aria-label="Меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i />
          <i />
          <i />
        </button>
      </div>

      {menuOpen && (
        <nav className="header__mobile" onClick={() => setMenuOpen(false)}>
          {[...navLeft, ...navRight].map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
