FROM node:12.15.0

RUN mkdir -p /usr/src/sportsstore

COPY dist/sports-store /usr/src/sportsstore/dist/sports-store

COPY authMiddleware.js /usr/src/sportsstore/
COPY serverdata.json /usr/src/sportsstore/
COPY server.js /usr/src/sportsstore/server.js
COPY deploy-package.json /usr/src/sportsstore/package.json

WORKDIR /usr/src/sportsstore

RUN npm install

EXPOSE 80

CMD ["node", "server.js"]
