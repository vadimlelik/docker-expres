FROM node:18

COPY . .

RUN npm i

CMD [ "node","data-service.js" ]