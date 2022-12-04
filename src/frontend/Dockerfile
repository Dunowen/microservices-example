FROM node:19-alpine as build

WORKDIR /app

COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM nginx:stable-alpine as final
COPY --from=build /app/dist /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;" ]
