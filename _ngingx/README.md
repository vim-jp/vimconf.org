# Using nginx on Windows

## Preparation

1.  Install nginx
    *   Download nginx/Windows-1.5.13 (or above) from http://nginx.org/en/download.html
    *   Unzip a downloaded file.
    *   Place the directory (nginx-1.5.13 or so) where you want.
2.  Setup environment value `NGINX_HOME` to point nginx install directory.

## Usage

To start nginx, double click start.cmd

To stop nginx, double click stop.cmd

When you have updated redirect configuration, double click reload.cmd to make
nginx reload it.

## Trouble shooting

*   If you can't start nginx server, kill all nginx.exe processes by Windows
    TaskManager, then remove logs/nginx.pid file.
