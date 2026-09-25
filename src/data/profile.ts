// Tout le contenu du site est ici : modifie ce fichier pour mettre à jour le portfolio.

export type Photo = {
  /** Chemin depuis le dossier public/, ex. "/images/projects/budget-dashboard.png" */
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  link?: { label: string; href: string };
  repo?: string;
  points: { title: string; text: string }[];
  /** Captures d'écran affichées dans la carte du projet (galerie cliquable). */
  photos?: Photo[];
  featured?: boolean;
};

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  badge?: string;
  text?: string;
  photos?: Photo[];
};

export const profile = {
  name: "Abdelghani Saidi",
  role: "Développeur fullstack",
  roleSuffix: "orienté sécurité applicative",
  status: "En recherche d’alternance",
  photo: "/images/profile.jpg",
  intro:
    "Étudiant en Bachelor 3 Concepteur Développeur d’Applications. Je construis des applications web et je les mets en production proprement : HTTPS, reverse proxy NGINX, secrets chiffrés, authentification JWT et pipeline CI/CD durci. Je cherche une alternance en développement fullstack, pentest, sécurité applicative ou SOC.",
  meta: ["Chalon-sur-Saône (71)", "Mobile géographiquement", "Permis B · véhiculé"],
  email: "saidi.abdelghani.pro@gmail.com",
  linkedin: {
    label: "abdelghani-saidi",
    href: "https://www.linkedin.com/in/abdelghani-saidi-0469982a0",
  },
  github: { label: "SaidIa0703", href: "https://github.com/SaidIa0703" },
  location: "Chalon-sur-Saône, mobile géographiquement",
};

export const projects: Project[] = [
  {
    name: "My Smart Budget",
    summary:
      "Application de gestion de budget, projet fil rouge du Bachelor, déployée en production.",
    stack: ["Docker", "NGINX", "AWS EC2", "GitHub Actions", "JWT", "Let’s Encrypt"],
    link: { label: "smarterbudget.net", href: "https://smarterbudget.net" },
    featured: true,
    points: [
      {
        title: "SSL/TLS & PKI",
        text: "Certificats x509 via Let’s Encrypt et Certbot, redirection HTTP vers HTTPS, renouvellement automatique, gestion des clés privée et publique.",
      },
      {
        title: "Secrets",
        text: "Clés SSH et tokens API chiffrés avec GitHub Encrypted Secrets. Aucun secret en clair dans le code ou les logs.",
      },
      {
        title: "Infrastructure",
        text: "Reverse proxy NGINX, isolation réseau Docker, healthchecks, aucun port sensible exposé directement.",
      },
      { title: "Authentification", text: "JWT signé en HS256 avec une expiration courte." },
    ],
    // Ajoute tes captures ici, par exemple :
    // photos: [
    //   { src: "/images/projects/budget-dashboard.png", alt: "Tableau de bord de My Smart Budget", caption: "Tableau de bord" },
    // ],
    photos: [],
  },
  {
    name: "ProtoRH",
    summary: "Application de gestion des ressources humaines.",
    stack: ["Python", "Flask", "SQL"],
    points: [
      { title: "Contrôle d’accès", text: "Authentification et gestion des rôles utilisateurs." },
      { title: "Injection SQL", text: "Requêtes paramétrées sur toute la couche d’accès aux données." },
    ],
    photos: [],
  },
];

export const experiences: TimelineItem[] = [
  {
    period: "2025 – 2026",
    title: "Développeur sécurité applicative",
    badge: "Alternance",
    org: "Emelista",
    text: "Sécurisation du site : HTTPS, en-têtes HTTP (CSP, X-Frame-Options, HSTS) et durcissement des configurations serveur. Audit des dépendances et correction des vulnérabilités avec Dependabot et SonarCloud, en suivant les recommandations de l’OWASP Top 10.",
  },
  {
    period: "09/2019 – 06/2020",
    title: "Technicien réseau",
    org: "Bouygues Télécom",
    text: "Déploiement de la fibre FTTH et câblage structuré. Interventions terrain en autonomie sur l’infrastructure réseau.",
  },
  {
    period: "09/2018 – 06/2019",
    title: "Technicien informatique",
    org: "Fabrice Gigaden",
    text: "Remise en état de plus de 50 postes : détection et suppression de malwares, réinstallation sécurisée des systèmes.",
  },
];

export const education: TimelineItem[] = [
  {
    period: "2026 – 2027",
    title: "Bachelor Concepteur Développeur d’Applications",
    badge: "En cours",
    org: "Colint School · RNCP niveau 6",
    text: "Projet fil rouge My Smart Budget avec un focus sécurité : SSL, x509, reverse proxy NGINX, secrets GitHub.",
  },
  { period: "2023", title: "BAFA", org: "Brevet d’aptitude aux fonctions d’animateur" },
  { period: "2022 – 2023", title: "Baccalauréat", org: "Spécialités NSI et SES" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Sécurité applicative",
    items: ["SSL/TLS", "x509", "JWT", "OWASP Top 10", "CSP", "HSTS", "SonarCloud"],
  },
  {
    group: "Réseau & infrastructure",
    items: ["NGINX", "SSH", "TCP/IP", "Docker", "Docker Compose", "AWS EC2", "Linux"],
  },
  {
    group: "Langages & frameworks",
    items: ["Python", "JavaScript", "TypeScript", "Node.js", "React", "Next.js", "Angular", "C", "Bash", "SQL"],
  },
  {
    group: "CI/CD & outils",
    items: ["GitHub Actions", "Encrypted Secrets", "Git", "Dependabot", "Postman", "VS Code"],
  },
];

export const facts: { label: string; value: string }[] = [
  { label: "Français", value: "Langue maternelle" },
  { label: "Espagnol", value: "B2" },
  { label: "Anglais", value: "B1, lecture de documentation technique" },
  { label: "Qualités", value: "Rigueur, curiosité, autonomie, détermination, polyvalence" },
];
