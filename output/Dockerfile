FROM node:18
WORKDIR src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 12432
CMD ["npm", "start"]