# flow

Track cash flow, budget, goals, and so on.

## Requirements
- Docker and docker-compose
- node and npm

## Development

- Run `npm run setup` to start the docker containers and setup the database.
  This will run all the commands.
- Run `npm prisma:deploy` to deploy database new migrations
- Run `npm prisma:generate` to regenerate the prisma client
- Run `npm start` to start all the containers

## Production

- Change `PRISMA_MANAGEMENT_API_JWT_SECRET` in `default.env` (or override it through `export` or `docker-compose up -e`)
