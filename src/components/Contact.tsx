import { profile } from "@/data/profile";
import CopyButton from "./CopyButton";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="h-contact">
      <div className="label">Contact</div>
      <div>
        <h2 id="h-contact">Travaillons ensemble</h2>
        <p className="contact-lede">
          Je suis disponible pour une alternance en développement fullstack ou en cybersécurité. Écrivez-moi, je
          réponds rapidement.
        </p>
        <ul className="contact-list">
          <li>
            <span className="k">E-mail</span>
            <a className="v" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <CopyButton value={profile.email} />
          </li>
          <li>
            <span className="k">LinkedIn</span>
            <a className="v" href={profile.linkedin.href} target="_blank" rel="noopener noreferrer">
              {profile.linkedin.label} ↗
            </a>
          </li>
          <li>
            <span className="k">GitHub</span>
            <a className="v" href={profile.github.href} target="_blank" rel="noopener noreferrer">
              {profile.github.label} ↗
            </a>
          </li>
          <li>
            <span className="k">Localisation</span>
            <span className="v">{profile.location}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
