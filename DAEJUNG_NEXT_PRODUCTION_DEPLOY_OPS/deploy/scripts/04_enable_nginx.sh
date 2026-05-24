#!/usr/bin/env bash
set -e

sudo cp /var/www/daejungnext/deploy/nginx/daejungnext.conf /etc/nginx/sites-available/daejungnext.conf
sudo ln -sf /etc/nginx/sites-available/daejungnext.conf /etc/nginx/sites-enabled/daejungnext.conf
sudo nginx -t
sudo systemctl reload nginx

echo "NGINX ENABLED"
