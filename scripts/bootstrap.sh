#!/bin/bash

# actualizar sistema
sudo apt update -y
sudo apt upgrade -y

# instalar dependencias
sudo apt install -y git curl

# instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# instalar Docker Compose plugin
sudo apt install -y docker-compose-plugin

# habilitar Docker
sudo systemctl enable docker
sudo systemctl start docker

# esperar a que Docker esté listo
sleep 10

# dar permisos al usuario ubuntu
sudo usermod -aG docker ubuntu || true

# ir al home
cd /home/ubuntu

# clonar repo
if [ -d "SERP" ]; then
    git clone https://github.com/sergiovillaa/SERP.git
fi 

cd SERP
git pull

# levantar contenedores
sudo docker compose up -d --build