FROM node:14-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /portfolio-site
# Cache and Install dependencies
COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/
RUN npm install
# Build the app
CMD ["npm", "start"]
