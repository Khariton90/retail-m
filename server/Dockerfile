FROM node:21-slim
RUN apt-get update && apt-get install -y openssl libssl-dev
WORKDIR /opt/retail-m
COPY ./dist/package.json .
RUN npm install
COPY ./dist/prisma/ ./prisma/
RUN npm run db-generate
RUN npm run db-migrate
COPY ./dist .
CMD ["node", "./main.js"]
