FROM node:latest
MAINTAINER Jayabaskar Rajagopal
ENV NODE_ENV=production
ENV PORT=8080
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE $PORT
ENTRYPOINT [ "node", "app.js"]
