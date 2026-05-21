@echo off
title DAEJUNG NEXT FULL START

cd /d %~dp0

start cmd /k "cd backend && npm install && npm run dev"
start cmd /k "cd frontend && npm install && npm run dev"

echo Frontend: http://localhost:3000
echo Backend : http://localhost:5000
pause
