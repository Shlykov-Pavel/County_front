import { useDogs } from "../../api/queries";
import { DogCard } from "../ui/DogCard";
import { Loadable } from "../ui/Loadable";
import { SectionHeading } from "../ui/SectionHeading";

export function DogsSection() {
  const dogs = useDogs({ limit: 4 });

  return (
    <section className="section section--dark" id="dogs">
      <div className="container">
        <SectionHeading eyebrow="Основа питомника" title="Наши производители" />

        <Loadable query={dogs}>
          {(items) => (
            <div className="grid grid--4">
              {items.map((dog) => (
                <DogCard key={dog.id} dog={dog} />
              ))}
            </div>
          )}
        </Loadable>

        <div className="center" style={{ marginTop: 40 }}>
          <a className="btn btn--gold" href="#contacts">
            Весь каталог собак
          </a>
        </div>
      </div>
    </section>
  );
}
