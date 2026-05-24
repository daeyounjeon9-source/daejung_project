#!/usr/bin/env bash
set -e

cd /var/www/daejungnext/frontend

npm install
npm run build

echo "FRONTEND BUILD DONE"
