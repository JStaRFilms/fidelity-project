@echo off
echo Starting Financial AI App...
echo.

echo Starting Backend Server...
start "Backend" cmd /k "cd /d backend && node src/server-final.js"

echo Waiting 3 seconds for backend to start...
timeout /t 3 /nobreak >nul

echo Starting Frontend Server...
start "Frontend" cmd /k "cd /d nextjs-app && pnpm dev"

echo.
echo Both servers starting...
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:5000
echo.
echo Keep both terminal windows open!
pause
