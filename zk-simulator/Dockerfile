# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install app dependencies using the `package.json` file.
COPY package*.json ./
RUN npm install

# Copy application code.
COPY dist/ ./dist

# Run the web service on container startup.
CMD [ "node", "/usr/src/app/dist/app.js" ]

# Expose the port the app runs on.
EXPOSE 3000
