# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /Docker-Explore/fe

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that React runs on (usually 3000 by default)
EXPOSE 3000

# Command to start the React application
CMD ["npm", "start"]
