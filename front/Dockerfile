FROM node:20

# Node usually goes on port 3000
EXPOSE 3000

# Create and switch to the app directory
COPY . .

# Install node packages
RUN npm install
RUN npm install react-dropzone
RUN npm install react-drag-drop-files
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install @mui/icons-material


# Start the app
CMD ["npm", "start"]
