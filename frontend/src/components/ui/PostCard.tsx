import type { Post } from "../../api/types";
import { formatDate } from "../../lib/labels";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="card">
      <div className="card__thumb ratio-4-3">
        <img src={post.cover.url} alt={post.cover.alt} loading="lazy" />
      </div>
      <div className="card__body">
        <div className="meta">
          {formatDate(post.publishedAt)} · {post.kind === "news" ? "Новости" : "Статья"}
        </div>
        <h3 style={{ fontSize: 19, margin: "8px 0" }}>{post.title}</h3>
        <span className="arrow">Читать →</span>
      </div>
    </article>
  );
}
