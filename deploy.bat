@echo off
REM Script de déploiement pour Windows
REM Usage: deploy.bat [production|staging]

setlocal enabledelayedexpansion

set ENVIRONMENT=%1
if "%ENVIRONMENT%"=="" set ENVIRONMENT=production

set CONTAINER_NAME=portfolio-app
set IMAGE_NAME=portfolio:latest
set PORT=%2
if "%PORT%"=="" set PORT=3000

echo ==========================================
echo ^^! Deploiement Portfolio - %ENVIRONMENT%
echo ==========================================

REM Verifier Docker
docker --version >nul 2>&1
if errorlevel 1 (
    echo ^^! Docker n'est pas installe
    exit /b 1
)

echo ^! Docker detecte

REM Arreter le container existant
echo ^! Arret du container existant...
docker stop %CONTAINER_NAME% >nul 2>&1
docker rm %CONTAINER_NAME% >nul 2>&1

REM Build l'image
echo ^! Construction de l'image Docker...
docker build -t %IMAGE_NAME% .

REM Run le nouveau container
echo ^! Demarrage du container...
docker run -d ^
    --name %CONTAINER_NAME% ^
    --restart unless-stopped ^
    -p %PORT%:3000 ^
    -e NODE_ENV=%ENVIRONMENT% ^
    %IMAGE_NAME%

REM Attendre le démarrage
echo ^! Attente du demarrage du container...
timeout /t 5 /nobreak

REM Verifier si le container tourne
docker ps --filter "name=%CONTAINER_NAME%" --filter "status=running" | find "%CONTAINER_NAME%" >nul
if errorlevel 1 (
    echo ^^! Erreur au demarrage du container
    docker logs %CONTAINER_NAME%
    exit /b 1
)

echo ^! Container demarrage avec succes!
echo Web disponible sur: http://localhost:%PORT%
echo.
echo Commandes utiles:
echo   - Logs: docker logs -f %CONTAINER_NAME%
echo   - Arreter: docker stop %CONTAINER_NAME%
echo   - Redemarrer: docker restart %CONTAINER_NAME%

echo ==========================================
echo ^! Deploiement termine!
echo ==========================================
