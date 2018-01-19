FROM node:8

# Create app dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependecies
ADD package.json package-lock.json /usr/src/app/
RUN npm install

# Copy app
ADD . ./

# Run
CMD ["node", "index.js"]