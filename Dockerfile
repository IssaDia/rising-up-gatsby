FROM node:latest

RUN yarn global add gatsby-cli
EXPOSE 8000

WORKDIR /app

# COPY the package.json file, update any deps and install them
COPY package.json .

RUN yarn install && yarn cache clean

# copy the whole source folder(the dir is relative to the Dockerfile
COPY . /app/

CMD ["gatsby", "develop", "-H", "0.0.0.0" ]
