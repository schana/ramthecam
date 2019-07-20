# HLS Server

This module is responsible for building and configuring an nginx server complete with the nginx-rtmp-module. `build` contains the Dockerfile for compiling the module.

## nginx-rtmp-module build instructions

1. Go to the `build` directory
1. `docker build -t modulebuild .`
1. `docker cp modulebuild:/etc/nginx/modules/ngx_rtmp_module.so ..`

## Run instructions

1. `docker build -t hs .`
1. `docker run --name hlsserver -p 80:80 -p 1935:1935 -d hs`
1. `docker logs -f hlsserver`

## Streaming instructions

1. Get [OBS Studio](https://obsproject.com/)
1. Set up your scene to capture what you want to stream
1. In Settings->Output, change Encoder to `Software (x264)`
1. In Settings->Stream, change server to `rtmp://<nginx address>:1935/live`, and the stream key to `stream`
1. Apply those changes and you're ready to start streaming
