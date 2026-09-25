const links = [
  { href: "#projets", label: "Projets" },
  { href: "#parcours", label: "Parcours" },
  { href: "#competences", label: "Compétences", optional: true },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="nav" aria-label="Navigation principale">
      <div className="wrap">
        <a className="brand" href="#top">
          abdelghani<span>.</span>saidi
        </a>
        <ul>
          {links.map((l) => (
            <li key={l.href} className={l.optional ? "opt" : undefined}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
