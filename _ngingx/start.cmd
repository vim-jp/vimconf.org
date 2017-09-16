@ECHO OFF

CD %~dp0

CALL cmd\setup.cmd
IF ERRORLEVEL 1 GOTO ERROR_END

IF NOT EXIST logs/nginx.pid GOTO NO_RUNNING_NGINX
ECHO NGINX is running already.
GOTO :ERROR_END

:NO_RUNNING_NGINX
ECHO NGINX Listening http://127.0.0.1:4000/
%NGINX_HOME%\nginx -c conf/nginx.conf

GOTO END
:ERROR_END
PAUSE
:END
