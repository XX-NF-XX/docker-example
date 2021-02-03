FROM node:14-alpine

WORKDIR /usr/src/app
# update alpine packages
RUN apk update && apk upgrade
# update npm
RUN npm i npm@latest -g
# copy package.json and package-lock.json
COPY package*.json ./
# run for production
RUN npm ci --only=production
# copy the rest (except files/folders mentioned in .dockerignore)
COPY . .

ENTRYPOINT ["npm"]
CMD ["start"]