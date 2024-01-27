FROM alpine:latest

ARG PB_VERSION=0.21.1
# Nginx waits for PB to initialize and accept connections at startup
ENV PB_INIT_WAIT=0.2

RUN apk add --no-cache \
    unzip \
    ca-certificates \
    nginx \
    # this is needed only if you want to use scp to copy later your pb_data locally
    openssh

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# uncomment to copy the local pb_migrations dir into the container
COPY ./pb_migrations /pb/pb_migrations

# uncomment to copy the local pb_hooks dir into the container
# COPY ./pb_hooks /pb/pb_hooks

# Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

# start Nginx and PocketBase
CMD (sleep $PB_INIT_WAIT && nginx)& /pb/pocketbase serve --http=0.0.0.0:8080
