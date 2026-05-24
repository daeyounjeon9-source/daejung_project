#!/usr/bin/env bash
set -e

echo "DAEJUNG NEXT server prepare"

sudo apt update
sudo apt install -y nginx git curl ufw postgresql postgresql-contrib

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

sudo npm install -g pm2

sudo mkdir -p /var/www/daejungnext
sudo chown -R $USER:$USER /var/www/daejungnext

sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

echo "SERVER PREPARE DONE"
