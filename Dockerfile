# ---------- 1. Build : génère le site statique dans /app/out ----------
FROM node:25-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---------- 2. Run : NGINX non-root qui sert uniquement les fichiers statiques ----------
FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:8080/ || exit 1
