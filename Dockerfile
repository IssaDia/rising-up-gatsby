# ./Dockerfile.dev
FROM node:14
RUN apt update && apt upgrade -y && \
    apt install gcc g++ make python git libc6-dev build-essential libpng-dev \
    libjpeg-dev libvips-dev libvips musl-dev node-gyp pngquant webp -y
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# COPY the package.json file, update any deps and install them
COPY package.json .
RUN npm update
RUN npm install
# copy the whole source folder(the dir is relative to the Dockerfile
COPY . /app/

CMD ["gatsby", "develop", "-H", "0.0.0.0"]

EXPOSE 9000

