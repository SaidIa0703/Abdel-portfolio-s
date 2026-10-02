# Portfolio d'Abdelghani Saidi

Site statique construit avec **Next.js 15 + TypeScript**, déployé sur **Cloudflare Pages**. Une configuration alternative **Docker + NGINX** pour VPS est aussi fournie.

## Structure

```
src/data/profile.ts      ← TOUT le contenu (textes, projets, parcours, photos)
src/components/          ← Composants React (Hero, Projects, Gallery, Timeline…)
src/app/globals.css      ← Styles (thème clair / sombre automatique)
public/images/           ← Photos (profil + captures de projets)
public/_headers          ← En-têtes de sécurité pour Cloudflare Pages
nginx/default.conf       ← NGINX du conteneur + en-têtes de sécurité (CSP, X-Frame-Options…)
deploy/nginx-host.conf   ← NGINX du VPS : HTTPS, HSTS, reverse proxy
docker-compose.yml       ← Conteneur non-root, lecture seule, exposé seulement en local
.github/workflows/       ← CI/CD : build puis déploiement SSH
```

## En local

```bash
npm install          # génère aussi package-lock.json : commite-le
npm run dev          # http://localhost:3000
npm run build        # génère le site statique dans out/
```

## Ajouter des photos

1. Place l'image dans `public/images/projects/` (par ex. `budget-dashboard.png`, idéalement 1600 px de large max).
2. Dans `src/data/profile.ts`, ajoute-la au projet :

```ts
photos: [
  { src: "/images/projects/budget-dashboard.png", alt: "Tableau de bord de My Smart Budget", caption: "Tableau de bord" },
],
```

Une galerie cliquable (agrandissement, flèches ←/→, Échap) apparaît automatiquement dans la carte du projet. Le même champ `photos` fonctionne sur les expériences du parcours.

Pour changer la photo de profil, remplace `public/images/profile.jpg`.

## Déploiement sur Cloudflare Pages (recommandé)

1. Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, puis choisis ce dépôt.
2. Réglages du build :

| Champ                  | Valeur          |
| ---------------------- | --------------- |
| Framework preset       | `Next.js (Static HTML Export)` |
| Build command          | `npm run build` |
| Build output directory | `out`           |
| Variable d'env.        | `NODE_VERSION` = `22` (déjà fixé par `.nvmrc`) |

3. **Save and Deploy**. Chaque `git push` sur `main` redéploie le site automatiquement, et chaque branche/PR obtient une URL de prévisualisation.
4. Domaine perso : onglet **Custom domains** du projet Pages. HTTPS est géré par Cloudflare.

Les en-têtes de sécurité (CSP, X-Frame-Options…) et le cache sont définis dans `public/_headers`, copié dans `out/` au build.

## Déploiement sur un VPS (alternative)

Le job `deploy` du workflow GitHub Actions ne se lance que manuellement (Actions → CI → Run workflow).

### 1. Une seule fois, sur le serveur

```bash
# Docker + plugin compose, NGINX et Certbot
sudo apt update && sudo apt install -y nginx certbot python3-certbot-nginx git
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER          # puis reconnecte-toi

# Code
git clone https://github.com/SaidIa0703/<nom-du-repo>.git ~/portfolio
cd ~/portfolio && docker compose up -d --build

# HTTPS
sudo cp deploy/nginx-host.conf /etc/nginx/sites-available/portfolio
sudo nano /etc/nginx/sites-available/portfolio      # remplace ton-domaine.fr
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo certbot --nginx -d ton-domaine.fr -d www.ton-domaine.fr
sudo nginx -t && sudo systemctl reload nginx
```

Pense à faire pointer le DNS de ton domaine (enregistrements A / AAAA) vers l'IP du VPS avant de lancer Certbot, et à n'ouvrir que les ports 22, 80 et 443 dans le pare-feu (`ufw`) ou le security group AWS.

### 2. Secrets GitHub (Settings → Secrets and variables → Actions)

| Secret        | Valeur                                                        |
| ------------- | ------------------------------------------------------------- |
| `VPS_HOST`    | IP ou domaine du VPS                                          |
| `VPS_USER`    | Utilisateur SSH (membre du groupe docker)                     |
| `VPS_SSH_KEY` | Clé privée SSH dédiée au déploiement (sa clé publique va dans `~/.ssh/authorized_keys` du VPS) |
| `VPS_PORT`    | Optionnel, port SSH si différent de 22                        |

Ensuite, lance le workflow manuellement : il build le site, puis se connecte au VPS pour le mettre à jour.

## Sécurité en place

- HTTPS avec TLS 1.2/1.3, redirection HTTP → HTTPS, HSTS
- CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- Site 100 % statique : aucun serveur Node exposé
- Conteneur NGINX non-root, système de fichiers en lecture seule, `cap_drop: ALL`, `no-new-privileges`
- Conteneur accessible uniquement sur `127.0.0.1`
- Polices auto-hébergées (next/font) : aucune requête vers un tiers
- Dependabot activé (npm, GitHub Actions, Docker)

Vérifie le résultat sur [securityheaders.com](https://securityheaders.com) et [SSL Labs](https://www.ssllabs.com/ssltest/).
