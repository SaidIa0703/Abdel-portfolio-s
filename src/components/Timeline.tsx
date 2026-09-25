import type { TimelineItem } from "@/data/profile";
import Gallery from "./Gallery";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="timeline">
      {items.map((it) => (
        <li key={it.title + it.period}>
          <div className="when">{it.period}</div>
          <div className="what">
            <h3>
              {it.title}
              {it.badge && <span className="pill">{it.badge}</span>}
            </h3>
            <div className="org">{it.org}</div>
            {it.text && <p>{it.text}</p>}
            {it.photos && it.photos.length > 0 && <Gallery photos={it.photos} />}
          </div>
        </li>
      ))}
    </ol>
  );
}
