FROM node:alpine as builder

ADD package.json package-lock.json ./
RUN npm install --only=production
ADD . .
RUN npm run-script build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /build .

EXPOSE 5000
