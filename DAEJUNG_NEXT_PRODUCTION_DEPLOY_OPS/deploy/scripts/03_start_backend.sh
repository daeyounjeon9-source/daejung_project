#!/usr/bin/env bash
set -e

cd /var/www/daejungnext/backend

npm install
pm2 start /var/www/daejungnext/deploy/pm2/ecosystem.config.cjs
pm2 save
pm2 startup

echo "BACKEND STARTED"
