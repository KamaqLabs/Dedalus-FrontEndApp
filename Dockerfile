# File: `Dockerfile`
# Stage 1: build
FROM node:18 AS builder
WORKDIR /app

# Copiar solo package files para aprovechar cache
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit --progress=false

# Copiar el resto y compilar para producción
COPY . .
RUN npm run build -- --configuration=production

# Stage 2: runtime con nginx
FROM nginx:stable-alpine AS runtime
# Reemplaza `your-app-name` por la carpeta real en dist (ej: my-app)
COPY --from=builder /app/dist/dedalus-front-end-app /usr/share/nginx/html
# Copia un nginx.conf personalizado (asegúrate que exista en el repo)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]

# File: `nginx.conf` (ejemplo para SPA)
# (Incluye este archivo en el repo; tu .dockerignore lo permite)
# server configuration:
