FROM node:12.7
WORKDIR /usr/src/app
# Install app dependencies. We do this before copying source code so we can use caching in docker.
COPY package.json yarn.lock ./
RUN yarn
# Copy the app bundle
COPY . .
# Build the app
RUN yarn

EXPOSE 3050

CMD ["npm", "start"]