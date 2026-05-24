#!/usr/bin/env bash
set -e

sudo apt install -y certbot python3-certbot-nginx

sudo certbot --nginx -d daejungnext.com -d www.daejungnext.com -d api.daejungnext.com

echo "SSL APPLIED"
