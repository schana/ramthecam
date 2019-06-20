FROM debian:stretch

RUN apt-get update

RUN apt-get install -y git
RUN apt-get install -y wget
RUN apt-get install -y ffmpeg
RUN apt-get install -y build-essential

RUN echo "deb http://nginx.org/packages/mainline/debian/ stretch nginx" >> /etc/apt/sources.list
RUN wget http://nginx.org/keys/nginx_signing.key
RUN apt-key add nginx_signing.key
RUN apt-get update
RUN apt-get install -y nginx

WORKDIR /tmp

# Check this to make sure we're downloading the correct version of source
# Also, we need the build flags to match the nginx compilation
RUN nginx -V

# Get source code
RUN wget http://nginx.org/download/nginx-1.17.0.tar.gz
RUN tar -xzvf nginx*.tar.gz
RUN git clone https://github.com/arut/nginx-rtmp-module.git

# Get build dependencies

RUN apt-get install -y libpcre3 libpcre3-dev
RUN apt-get install -y libssl-dev
RUN apt-get install -y zlib1g zlib1g-dev
RUN apt-get install -y libxml2 libxml2-dev
RUN apt-get install -y libxslt-dev
RUN apt-get install -y libgd-dev
RUN apt-get install -y libgeoip-dev
RUN apt-get install -y sudo
RUN apt-get install -y devscripts
RUN apt-get install -y quilt

# Build the module
WORKDIR /tmp/nginx-1.17.0/
RUN ./configure --prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx.pid --lock-path=/var/run/nginx.lock --http-client-body-temp-path=/var/cache/nginx/client_temp --http-proxy-temp-path=/var/cache/nginx/proxy_temp --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp --http-scgi-temp-path=/var/cache/nginx/scgi_temp --user=nginx --group=nginx --with-compat --with-file-aio --with-threads --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-mail --with-mail_ssl_module --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module --with-cc-opt='-g -O2 -fdebug-prefix-map=/data/builder/debuild/nginx-1.17.0/debian/debuild-base/nginx-1.17.0=. -fstack-protector-strong -Wformat -Werror=format-security -Wp,-D_FORTIFY_SOURCE=2 -fPIC' --with-ld-opt='-Wl,-z,relro -Wl,-z,now -Wl,--as-needed -pie' --add-dynamic-module=../nginx-rtmp-module
RUN make modules
RUN cp objs/ngx_rtmp_module.so /etc/nginx/modules

# docker cp sandbox:/etc/nginx/modules/ngx_rtmp_module.so .