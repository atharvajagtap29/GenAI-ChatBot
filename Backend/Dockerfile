# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the container at /app. [./ means get out of this file i.e Dockerfile and you will find noth package.json and package-lock.json]
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the current directory contents into the container at /app/`here`
COPY . .

# Expose port 8080 to the outside world
EXPOSE 8080

# Start the application
CMD ["npm", "start"]