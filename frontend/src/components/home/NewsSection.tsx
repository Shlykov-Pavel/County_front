import { usePosts } from "../../api/queries";
import { Loadable } from "../ui/Loadable";
import { PostCard } from "../ui/PostCard";
import { SectionHeading } from "../ui/SectionHeading";

export function NewsSection() {
  const posts = usePosts({ limit: 3 });

  return (
    <section className="section section--white" id="news">
      <div className="container">
        <SectionHeading eyebrow="Хроника" title="Новости и статьи" />

        <Loadable query={posts}>
          {(items) => (
            <div className="grid grid--3">
              {items.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </Loadable>
      </div>
    </section>
  );
}
