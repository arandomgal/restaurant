FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm set strict-ssl false
RUN npm install
COPY ./ ./
CMD [ "/bin/sh", "-c", "export REACT_APP_GITHUB_URL='https://api.github.com/users/magladde';echo $REACT_APP_GITHUB_URL;npm start" ]