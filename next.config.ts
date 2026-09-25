import type { NextConfig } from "next";

// Export statique : `npm run build` génère le dossier `out/`,
// servi ensuite par NGINX (aucun serveur Node en production).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
