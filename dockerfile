FROM node:14-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /portfolio-site
# Cache and Install dependencies
COPY public/ /portfolio-site/public
COPY src/ /portfolio-site/src
COPY package.json /portfolio-site/
RUN npm install
# Build the app
CMD ["npm", "start"]
