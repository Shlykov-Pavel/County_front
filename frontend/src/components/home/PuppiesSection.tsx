import { usePuppies } from "../../api/queries";
import { Loadable } from "../ui/Loadable";
import { PuppyCard } from "../ui/PuppyCard";
import { SectionHeading } from "../ui/SectionHeading";

export function PuppiesSection() {
  const puppies = usePuppies({ status: "free", limit: 3 });

  return (
    <section className="section section--white" id="puppies">
      <div className="container">
        <SectionHeading eyebrow="Свободны сейчас" title="Актуальные щенки" />

        <Loadable query={puppies}>
          {(items) => (
            <div className="grid grid--3">
              {items.map((puppy) => (
                <PuppyCard key={puppy.id} puppy={puppy} />
              ))}
            </div>
          )}
        </Loadable>

        <div className="center" style={{ marginTop: 38 }}>
          <a className="btn btn--ghost" href="#contacts">
            Все помёты и планы вязок
          </a>
        </div>
      </div>
    </section>
  );
}
