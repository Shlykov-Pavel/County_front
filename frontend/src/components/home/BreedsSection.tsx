import { SectionHeading } from "../ui/SectionHeading";

const breeds = [
  {
    title: "Кавалер кинг чарльз спаниель",
    text: "Английская королевская порода: 6–8 кг, мягкий нрав, полное отсутствие агрессии. Собака-компаньон, которая одинаково рада прогулке и вечеру на диване. Отлично уживается с детьми.",
    img: "/img/nc-dog-ckcs.jpg",
    alt: "Кавалер кинг чарльз спаниель на снегу",
    position: "50% 25%",
  },
  {
    title: "Пудель",
    text: "Одна из самых умных пород: быстрое обучение, шерсть без сезонной линьки, подходит аллергикам. Малый и той — компактный размер при полноценном рабочем интеллекте.",
    img: "/img/nc-dog-poodle.jpg",
    alt: "Абрикосовый пудель на снегу",
    position: "50% 20%",
  },
];

export function BreedsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Две породы, один характер дома" title="Кого мы разводим" />

        <div className="grid grid--2">
          {breeds.map((breed) => (
            <article className="card" key={breed.title}>
              <div className="card__thumb ratio-16-10">
                <img src={breed.img} alt={breed.alt} style={{ objectPosition: breed.position }} />
              </div>
              <div className="card__body" style={{ padding: 28 }}>
                <h3>{breed.title}</h3>
                <p className="meta">{breed.text}</p>
                <a className="arrow" href="#dogs">
                  Собаки породы →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
