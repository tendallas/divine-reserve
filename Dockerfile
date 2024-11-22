FROM node:20.9-alpine

RUN apk add --no-cache git openssh-client

WORKDIR /app
COPY package.json yarn.lock ./
# install dependencies
RUN yarn install --frozen-lockfile
COPY . .
# build
RUN yarn build
# remove dev dependencies
RUN npm prune --production

EXPOSE 3000
CMD ["yarn", "start"]
