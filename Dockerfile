# from base image node
FROM node:slim

WORKDIR /app

COPY ./app/package.json .

# install all dependencies
RUN npm install

# copy oter files as well
COPY ./ .

#expose the port
EXPOSE 3000

ENV HOST 0.0.0.0