# flow

Track cash flow, budget, goals, and so on.

## Requirements
- Docker and docker-compose
- node and npm

## Development

- Run `npm run setup` to start the docker containers and setup the database. (Required first)
- Run `npm run api` to start the API development server
- Run `npm run spa` to start the Frontend development server

After making changes to the schema:

- Run `npm run prisma:deploy` to deploy database new migrations
- Run `npm run prisma:generate` to regenerate the prisma client

## Production

- Change `PRISMA_MANAGEMENT_API_JWT_SECRET` in `default.env` (or override it through `export` or `docker-compose up -e`)
- Run `npm start` to start all the containers in production mode
