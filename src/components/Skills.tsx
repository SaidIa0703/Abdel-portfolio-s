import { facts, skills } from "@/data/profile";
import Tags from "./Tags";

export default function Skills() {
  return (
    <section id="competences" aria-labelledby="h-comp">
      <div className="label">Compétences</div>
      <div>
        <h2 id="h-comp">Compétences techniques</h2>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group}>
              <h3>{s.group}</h3>
              <Tags items={s.items} />
            </div>
          ))}
        </div>
        <h3 className="sub-h">Langues &amp; qualités</h3>
        <dl className="facts">
          {facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
