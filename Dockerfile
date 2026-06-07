# --- Stage 1: Build the application ---
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the application source code
COPY . .
RUN npm run build

# --- Stage 2: Serve the application using Nginx ---
FROM nginx:alpine

# 1. Fix SPA Routing: Configure Nginx to fallback to index.html
RUN echo 'server { \
    listen 8080; \
    location / { \
    root /usr/share/nginx/html; \
    index index.html index.htm; \
    try_files $uri $uri/ /index.html; \
    } \
    }' > /etc/nginx/conf.d/default.conf

# 2. Security: Change ownership of Nginx cache and runtime files to the non-root user
RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

# Copy the build output from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# 3. Security: Switch to the non-root 'nginx' user
USER nginx

# Expose port 8080 (standard for non-root containers)
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]