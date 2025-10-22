FROM node:20-alpine
WORKDIR frontend
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 5005
CMD ["node", "server.js"]