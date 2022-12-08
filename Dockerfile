# stage1 as builder
FROM node:18.12.1-slim as builder

# copy the package.json to install dependencies
COPY package.json .
COPY yarn.lock .

ENV YARN_CACHE_FOLDER=/usr/local/yarn-cache
VOLUME /usr/local/yarn-cache

# Install the dependencies and make the folder
RUN yarn --network-timeout 100000

RUN yarn cache dir
RUN yarn cache list

# copy the package.json to install dependencies
COPY . .

# Build the project and copy the files
RUN yarn build:production

FROM nginx:alpine

#!/bin/sh

COPY ./config/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /dist /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
