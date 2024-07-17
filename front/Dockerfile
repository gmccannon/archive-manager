FROM node:20

# Node usually goes on port 3000
EXPOSE 3000

# Create and switch to the app directory
COPY . .

# Install node packages
RUN npm install

# Start the app
CMD ["npm", "start"]
