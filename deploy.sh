#!/bin/bash

# 🚀 Script de déploiement automatisé pour VPS
# Usage: ./deploy.sh [production|staging]

set -e

ENVIRONMENT=${1:-production}
CONTAINER_NAME="portfolio-app"
IMAGE_NAME="portfolio:latest"
PORT=${2:-3000}

echo "=========================================="
echo "🚀 Déploiement Portfolio - $ENVIRONMENT"
echo "=========================================="

# Vérifier Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé"
    exit 1
fi

echo "✅ Docker détecté"

# Stop le container existant
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "⏹️  Arrêt du container existant..."
    docker stop $CONTAINER_NAME || true
    docker rm $CONTAINER_NAME || true
fi

# Build l'image
echo "🔨 Construction de l'image Docker..."
docker build -t $IMAGE_NAME .

# Run le nouveau container
echo "🚀 Démarrage du container..."
docker run -d \
    --name $CONTAINER_NAME \
    --restart unless-stopped \
    -p $PORT:3000 \
    -e NODE_ENV=$ENVIRONMENT \
    $IMAGE_NAME

# Attendre que le container soit prêt
echo "⏳ Attente du démarrage du container..."
sleep 5

# Vérifier la health
if docker ps --filter "name=$CONTAINER_NAME" --filter "status=running" | grep -q $CONTAINER_NAME; then
    echo "✅ Container démarré avec succès!"
    echo "🌐 Portfolio disponible sur: http://localhost:$PORT"
    echo ""
    echo "Commandes utiles:"
    echo "  - Voir les logs: docker logs -f $CONTAINER_NAME"
    echo "  - Arrêter: docker stop $CONTAINER_NAME"
    echo "  - Redémarrer: docker restart $CONTAINER_NAME"
else
    echo "❌ Erreur au démarrage du container"
    docker logs $CONTAINER_NAME
    exit 1
fi

echo "=========================================="
echo "✨ Déploiement terminé!"
echo "=========================================="
