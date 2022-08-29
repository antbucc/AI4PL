
FROM scottyhardy/docker-wine:latest
FROM node:16
WORKDIR /usr/src



COPY wsynth.exe /usr/src

COPY server.js /usr/src

COPY package.json /usr/src



RUN npm install

CMD npm start