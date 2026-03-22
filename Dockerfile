# Use the official bun image as the base
FROM oven/bun:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN bun install

# Copy the rest of the application files
COPY . .

EXPOSE 8080

# Set the command to run the application (e.g., start a server)
CMD ["bun", "dev"]
