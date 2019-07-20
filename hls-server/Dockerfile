FROM debian:stretch

RUN apt-get update
RUN apt-get install -y wget
RUN apt-get install -y ffmpeg
RUN apt-get install -y gnupg2
RUN echo "deb http://nginx.org/packages/mainline/debian/ stretch nginx" >> /etc/apt/sources.list
RUN wget http://nginx.org/keys/nginx_signing.key
RUN apt-key add nginx_signing.key
RUN apt-get update
RUN apt-get install -y nginx

# Set up nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY ngx_rtmp_module.so /etc/nginx/modules

RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log
RUN mkdir -p /opt/hls
RUN chmod 777 /opt/hls
# Run it
EXPOSE 80
EXPOSE 1935
STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]

# In Streamlabs OBS, use a custom stream to rtmp://<server address>:1935/live with a key of "stream"