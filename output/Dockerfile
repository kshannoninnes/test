FROM node:20-alpine
WORKDIR final_take_please
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 9999
CMD ["npm", "start"]