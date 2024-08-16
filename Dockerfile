FROM node:21-alpine

RUN cd

COPY yarn.lock .
COPY package.json .

RUN yarn

COPY . .

# Timeweb ругаеса на ето)
EXPOSE 80

ENTRYPOINT ["node", "--env-file=.env", "build/bot.js"]