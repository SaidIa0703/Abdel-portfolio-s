import { projects } from "@/data/profile";
import Gallery from "./Gallery";
import Tags from "./Tags";

export default function Projects() {
  return (
    <section id="projets" aria-labelledby="h-projets">
      <div className="label">Projets</div>
      <div>
        <h2 id="h-projets">Projets sélectionnés</h2>
        <div className="projects">
          {projects.map((p) => (
            <article key={p.name} className={`project${p.featured ? " featured" : ""}`}>
              <div className="p-head">
                <h3>{p.name}</h3>
                <div className="p-links">
                  {p.link && (
                    <a href={p.link.href} target="_blank" rel="noopener noreferrer">
                      {p.link.label} ↗
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer">
                      Code ↗
                    </a>
                  )}
                </div>
              </div>
              <p className="p-sub">{p.summary}</p>
              {p.photos && p.photos.length > 0 && <Gallery photos={p.photos} />}
              <Tags items={p.stack} />
              <ul className="points">
                {p.points.map((pt) => (
                  <li key={pt.title}>
                    <strong>{pt.title}</strong>
                    <span>{pt.text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
