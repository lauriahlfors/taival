FROM node:24-alpine AS builder

WORKDIR /app
COPY . /app

RUN --mount=type=cache,target=/root/.npm npm install

EXPOSE 5173
CMD [ "npm", "run", "dev", "--", "--host" ]
