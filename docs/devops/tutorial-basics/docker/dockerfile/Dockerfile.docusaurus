FROM node:16.16.0-alpine3.16 as base
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

FROM nginx:stable-alpine
RUN apk update && apk add tzdata
ENV TZ=Asia/Ho_Chi_Minh
COPY nginx.conf /etc/nginx/conf.d/configfile.template
ENV PORT 3000
ENV HOST 0.0.0.0
WORKDIR /home/node/app
RUN sh -c "envsubst '\$PORT'  < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"
COPY --from=base /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]