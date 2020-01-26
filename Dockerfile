  
FROM node:latest

WORKDIR /opt/lightainer-lite/

COPY / /opt/lightainer-lite

COPY .env.docker /opt/lightainer-lite/.env

RUN npm install

EXPOSE 3333

CMD ["npm", "start"]