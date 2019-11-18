FROM node:10 AS builder

WORKDIR /workdir

COPY *.json /workdir/

RUN npm ci 

COPY . /workdir/

RUN npm run build

FROM xmorse/nginx-for-react:latest

COPY --from=builder /workdir/public /var/www