FROM nginx:alpine
RUN find ./public -type f | xargs gzip -k
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./public /usr/share/nginx/html
