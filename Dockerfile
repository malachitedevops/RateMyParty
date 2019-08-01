FROM node:10
WORKDIR /application
ADD package.json .
RUN npm install
ADD . ./
EXPOSE 3024
CMD ["node","start"]
