#!/bin/bash

docker compose up -d
pm2 restart all

echo "DAEJUNG NEXT GLOBAL OPEN READY"