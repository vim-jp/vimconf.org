@ECHO OFF

CD %~dp0

CALL cmd\setup.cmd
IF ERRORLEVEL 1 GOTO ERROR_END

IF EXIST logs/nginx.pid GOTO RUNNING_NGINX
ECHO NGINX is not running yet.
GOTO ERROR_END

:RUNNING_NGINX
%NGINX_HOME%\nginx -c conf/nginx.conf -s reload

GOTO END
:ERROR_END
PAUSE
:END
