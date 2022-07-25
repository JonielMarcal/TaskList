FROM node:16.16-alpine3.15

WORKDIR /app

COPY . ./app/

RUN yarn install

EXPOSE 3000

CMD ["node", "index.js"]