#!/usr/bin/env bash
###################

if [ -f .ready ]; then
    echo '[+] Already setup.'
    echo '    rm .ready # to force setup.'
    exit 0
fi


docker-compose up -d
npm run prisma:deploy
npm run prisma:generate
touch .ready
