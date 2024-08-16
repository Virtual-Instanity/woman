FROM node:21-alpine

RUN cd

COPY yarn.lock .
COPY package.json .

RUN yarn

COPY . .
RUN yarn tsc

# Timeweb ругаеса на ето)
EXPOSE 80

ENTRYPOINT ["node", "build/bot.js"]