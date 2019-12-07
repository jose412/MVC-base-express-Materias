FROM node:9-slim
RUN mkdir /src
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 6000
CMD ["node","app.js"]