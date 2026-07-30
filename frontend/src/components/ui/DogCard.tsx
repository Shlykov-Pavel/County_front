import type { Dog } from "../../api/types";
import { breedLabel, sexLabel } from "../../lib/labels";

export function DogCard({ dog }: { dog: Dog }) {
  return (
    <article className="card">
      <div className="card__thumb ratio-4-5">
        <img src={dog.photo.url} alt={dog.photo.alt} loading="lazy" />
      </div>
      <div className="card__body">
        <span className="badge badge--title">{dog.title}</span>
        <h3 style={{ marginTop: 12 }}>{dog.name}</h3>
        <div className="pedigree-name">{dog.pedigreeName}</div>
        <div className="meta" style={{ marginTop: 10 }}>
          {breedLabel[dog.breed]} · {sexLabel[dog.sex]} · {dog.bornYear}
        </div>
      </div>
    </article>
  );
}
