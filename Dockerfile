FROM mhart/alpine-node:10

LABEL maintainer="Daniel Costa"

WORKDIR /app

COPY . /app

RUN npm install --prod

EXPOSE 3000

CMD ["node", "app.js"]