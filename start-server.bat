@echo off
cd /d "%~dp0"
echo.
echo 星辰智能体课程刷题页已准备完成
echo 本机访问: http://localhost:8000
echo 手机或其他电脑访问: http://你的电脑局域网IP:8000
echo.
python -m http.server 8000
