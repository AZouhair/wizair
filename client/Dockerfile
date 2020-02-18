FROM node:8
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

EXPOSE 3000

RUN npm rebuild node-sass

CMD [ "npm", "start" ]