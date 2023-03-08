FROM node:18.14.2-alpine3.17 as build
WORKDIR /app
COPY . .
RUN npm i --legacy-peer-deps
RUN npm run build
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER nginx
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]