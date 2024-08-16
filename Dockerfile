FROM node:21-alpine

RUN cd

COPY yarn.lock .
COPY package.json .

RUN yarn

COPY . .

CMD ['node', '--env-file=.env', 'build/bot.js']