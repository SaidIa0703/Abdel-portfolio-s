import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <header className="hero">
      <div>
        <div className="status">
          <i aria-hidden="true" />
          {profile.status}
        </div>
        <h1>{profile.name}</h1>
        <p className="role">
          <b>{profile.role}</b> {profile.roleSuffix}
        </p>
        <p className="lede">{profile.intro}</p>
        <div className="actions">
          <a className="btn primary" href="#contact">
            Me contacter
          </a>
          <a className="btn" href={profile.github.href} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a className="btn" href={profile.linkedin.href} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
        <div className="meta">
          {profile.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
      <div className="portrait">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={profile.photo} alt={`Portrait d’${profile.name}`} width={600} height={600} />
      </div>
    </header>
  );
}
