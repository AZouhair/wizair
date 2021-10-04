FROM node:8
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

#RUN npm uninstall node-sass
#RUN npm install node-sass
RUN npm install --silent
RUN npm rebuild node-sass --sass-binary-name=linux-x64-83

COPY . ./

EXPOSE 3000

CMD [ "npm", "start" ]