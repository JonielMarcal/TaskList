FROM node:16.16-alpine3.15

WORKDIR /pastaapi

COPY . ./pastaapi/

RUN yarn install

EXPOSE 3000

CMD ["node", "index.js"]