import { SectionHeading } from "../ui/SectionHeading";

const reviews = [
  {
    text: "Забрали Марту два года назад. Заводчик до сих пор на связи и отвечает на любые вопросы — даже про корм и стрижку. Собака здоровая и абсолютно домашняя.",
    author: "Ирина и Марта · Москва",
  },
  {
    text: "Долго выбирали питомник и не пожалели. Показали родителей, документы, тесты — всё честно. Наш Тимофей вырос точь-в-точь как обещали по характеру.",
    author: "Семья Ковалёвых · Санкт-Петербург",
  },
];

export function ReviewsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Счастливые семьи" title="Отзывы владельцев" />

        <div className="grid grid--2">
          {reviews.map((review) => (
            <blockquote className="quote" key={review.author}>
              <p>«{review.text}»</p>
              <div className="meta">{review.author}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
