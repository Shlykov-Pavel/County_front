import type { Puppy } from "../../api/types";
import { puppyStatus } from "../../lib/labels";

export function PuppyCard({ puppy }: { puppy: Puppy }) {
  const status = puppyStatus[puppy.status];

  return (
    <article className="card">
      <div className="card__thumb ratio-1-1">
        <img src={puppy.photo.url} alt={puppy.photo.alt} loading="lazy" />
      </div>
      <div className="card__body">
        <span className={status.className}>{status.label}</span>
        <h3 style={{ fontSize: 18, margin: "10px 0 2px" }}>{puppy.label}</h3>
        <div className="meta">
          {puppy.nickname} · {puppy.color}
        </div>
        {puppy.status === "free" && (
          <a className="arrow" style={{ marginTop: 12 }} href="#contacts">
            Забронировать →
          </a>
        )}
      </div>
    </article>
  );
}
