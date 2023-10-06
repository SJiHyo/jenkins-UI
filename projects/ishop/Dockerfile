# Compile and Build angular application

FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app

RUN npm install

RUN npm run build

# Serve angular app with nginx server

FROM nginx:latest

COPY --from=build /usr/local/app/dist/ishop /usr/share/nginx/html