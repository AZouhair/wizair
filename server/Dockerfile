FROM node:15
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install 

COPY . .


EXPOSE 5000
CMD [ "node", "server.js" ]