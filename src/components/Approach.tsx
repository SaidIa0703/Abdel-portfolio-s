export default function Approach() {
  return (
    <section id="approche" aria-labelledby="h-approche">
      <div className="label">Approche</div>
      <div>
        <h2 id="h-approche">Une application n’est terminée que lorsqu’elle est sécurisée en production.</h2>
        <pre className="headers" aria-label="En-têtes HTTP de sécurité de ce site">
          <b>HTTP/2 200</b>
          {"\n"}
          <span className="k">strict-transport-security</span>: max-age=31536000; includeSubDomains
          {"\n"}
          <span className="k">content-security-policy</span>: default-src &apos;self&apos;
          {"\n"}
          <span className="k">x-frame-options</span>: DENY
          {"\n"}
          <span className="k">x-content-type-options</span>: nosniff
        </pre>
        <p className="caption">
          Ces en-têtes protègent aussi ce portfolio. Tu peux le vérifier dans l’onglet Réseau de ton navigateur.
        </p>
      </div>
    </section>
  );
}
