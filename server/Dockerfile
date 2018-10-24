FROM node:8-alpine

RUN mkdir -p /usr/eventsAgent

COPY ./package.json /usr/eventsAgent

WORKDIR /usr/eventsAgent

RUN yarn

COPY . .

CMD ["yarn", "start"]