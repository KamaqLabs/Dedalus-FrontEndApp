# --------- Etapa 1: Build Angular ---------
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# --------- Etapa 2: NGINX ---------
FROM nginx:stable-alpine

# Limpia contenido por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia el build generado directamente a html/
COPY --from=builder /app/dist/dedalus-front-end-app/browser /usr/share/nginx/html

# Copia tu configuración personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
