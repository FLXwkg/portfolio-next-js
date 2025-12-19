# 🐳 Guide de Déploiement Docker sur VPS

## 📋 Table des matières
1. [Prérequis](#prérequis)
2. [Installation Docker](#installation-docker)
3. [Déploiement Local](#déploiement-local)
4. [Déploiement sur VPS](#déploiement-sur-vps)
5. [Gestion du Container](#gestion-du-container)
6. [Configuration SSL/HTTPS](#configuration-sslhttps)
7. [Monitoring et Logs](#monitoring-et-logs)

---

## 🔧 Prérequis

- Serveur VPS (Linux recommandé)
- Accès SSH au VPS
- Git installé
- Docker installé

---

## ⬇️ Installation Docker

### Sur Linux (Ubuntu/Debian)

```bash
# Mise à jour du système
sudo apt update && sudo apt upgrade -y

# Installer Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Ajouter l'utilisateur courant au groupe docker
sudo usermod -aG docker $USER
newgrp docker

# Vérifier l'installation
docker --version
docker run hello-world
```

### Sur CentOS/RHEL

```bash
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install -y docker-ce docker-ce-cli containerd.io
sudo systemctl start docker
sudo usermod -aG docker $USER
```

### Installer Docker Compose

```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

---

## 🏗️ Déploiement Local

### Test du build Docker

```bash
# Construire l'image
docker build -t portfolio:latest .

# Lancer le container
docker run -d \
  --name portfolio-app \
  -p 3000:3000 \
  -e NODE_ENV=production \
  portfolio:latest

# Vérifier que ça fonctionne
docker logs portfolio-app
curl http://localhost:3000
```

### Utiliser Docker Compose (Recommandé)

```bash
# Démarrer
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter
docker-compose down
```

---

## 🚀 Déploiement sur VPS

### Méthode 1: Via Script (Recommandé)

```bash
# Depuis votre VPS
cd /home/user/portfolio

# Rendre le script exécutable
chmod +x deploy.sh

# Déployer
./deploy.sh production

# Ou avec un port personnalisé
./deploy.sh production 8080
```

### Méthode 2: Manuellement

```bash
# Cloner le repository
git clone <your-repo-url> portfolio
cd portfolio

# Construire l'image
docker build -t portfolio:latest .

# Lancer le container
docker run -d \
  --name portfolio-app \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  portfolio:latest

# Vérifier le statut
docker ps
```

### Méthode 3: Docker Compose sur VPS

```bash
# Adapter le port dans docker-compose.yml si nécessaire
vim docker-compose.yml

# Démarrer les services
docker-compose up -d

# Vérifier
docker-compose ps
```

---

## 🎛️ Gestion du Container

### Commandes Essentielles

```bash
# Voir les containers actifs
docker ps

# Voir tous les containers
docker ps -a

# Voir les logs en temps réel
docker logs -f portfolio-app

# Arrêter le container
docker stop portfolio-app

# Redémarrer
docker restart portfolio-app

# Supprimer le container
docker rm portfolio-app

# Inspecter le container
docker inspect portfolio-app

# Accéder au shell du container
docker exec -it portfolio-app /bin/sh
```

### Mettre à Jour l'Application

```bash
# Aller dans le répertoire
cd /home/user/portfolio

# Récupérer les derniers changements
git pull origin main

# Reconstruire l'image
docker build -t portfolio:latest .

# Arrêter l'ancien container
docker stop portfolio-app
docker rm portfolio-app

# Démarrer le nouveau
docker run -d \
  --name portfolio-app \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  portfolio:latest
```

Ou avec le script:
```bash
./deploy.sh production
```

---

## 🔒 Configuration SSL/HTTPS

### Option 1: Let's Encrypt avec Certbot

```bash
# Installer Certbot
sudo apt install certbot python3-certbot-nginx -y

# Générer le certificat
sudo certbot certonly --standalone \
  -d votre-domaine.com \
  -d www.votre-domaine.com

# Les certificats sont dans /etc/letsencrypt/live/votre-domaine.com/
```

### Option 2: Nginx Reverse Proxy

```bash
# Créer docker-compose avec Nginx
cat > docker-compose.production.yml << 'EOF'
version: '3.8'

services:
  portfolio:
    build: .
    expose:
      - 3000
    restart: unless-stopped
    environment:
      NODE_ENV: production

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - /etc/letsencrypt:/etc/letsencrypt:ro
    depends_on:
      - portfolio
    restart: unless-stopped
EOF

# Démarrer
docker-compose -f docker-compose.production.yml up -d
```

### Configurer Nginx pour HTTPS

Dans `nginx.conf`, décommenter et configurer la section HTTPS avec:
- `server_name votre-domaine.com`
- Chemins SSL corrects

---

## 📊 Monitoring et Logs

### Voir les Ressources Utilisées

```bash
# Statistiques en temps réel
docker stats portfolio-app

# Inspect détaillé
docker inspect portfolio-app
```

### Persister les Logs

```bash
# Créer un répertoire pour les logs
mkdir -p /var/log/portfolio

# Modifier docker-compose pour monter les logs
docker run -d \
  --name portfolio-app \
  --restart unless-stopped \
  -p 3000:3000 \
  -v /var/log/portfolio:/app/logs \
  -e NODE_ENV=production \
  portfolio:latest
```

### Rotation des Logs

Créer `/etc/docker/daemon.json`:
```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
```

Puis redémarrer Docker:
```bash
sudo systemctl restart docker
```

---

## 🔐 Bonnes Pratiques Sécurité

### 1. Firewall

```bash
# Ouvrir les ports nécessaires
sudo ufw allow 22/tcp   # SSH
sudo ufw allow 80/tcp   # HTTP
sudo ufw allow 443/tcp  # HTTPS
sudo ufw enable
```

### 2. Mise à Jour des Images

```bash
# Mettre à jour Node.js régulièrement
docker pull node:20-alpine

# Reconstruire l'image
docker build -t portfolio:latest .
```

### 3. Secrets et Variables

```bash
# Ne JAMAIS commiter les secrets
echo ".env.production" >> .gitignore

# Créer un fichier .env.production
EMAILJS_PUBLIC_KEY=votre_clé
EMAILJS_SERVICE_ID=votre_service

# Le passer au container
docker run -d \
  --name portfolio-app \
  --env-file .env.production \
  portfolio:latest
```

### 4. Backups

```bash
# Backup du répertoire
tar -czf portfolio-backup-$(date +%Y%m%d).tar.gz /home/user/portfolio

# Backup de l'image Docker
docker save portfolio:latest | gzip > portfolio-image.tar.gz
```

---

## 🐛 Dépannage

### Le container démarre puis s'arrête

```bash
# Vérifier les logs
docker logs portfolio-app

# Possibles causes:
# - Port déjà utilisé: sudo lsof -i :3000
# - Erreur de build: docker build --no-cache -t portfolio:latest .
```

### Port déjà utilisé

```bash
# Trouver le processus
sudo lsof -i :3000

# Tuer le processus
kill -9 <PID>

# Ou utiliser un autre port
docker run -d -p 8080:3000 portfolio:latest
```

### Pas d'accès en dehors de localhost

```bash
# Vérifier le firewall
sudo ufw status

# Vérifier que le port est exposé
docker port portfolio-app

# Vérifier que le container listen sur 0.0.0.0
docker logs portfolio-app | grep listening
```

---

## 📈 Performance

### Limiter les Ressources

```bash
docker run -d \
  --name portfolio-app \
  --memory="512m" \
  --cpus="0.5" \
  -p 3000:3000 \
  portfolio:latest
```

### Ou dans docker-compose.yml

```yaml
services:
  portfolio:
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
```

---

## 📞 Support & Ressources

- **Docker Docs**: https://docs.docker.com/
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Nginx Reverse Proxy**: https://nginx.org/en/docs/

---

**✨ Votre portfolio est maintenant conteneurisé et prêt pour la production!**
