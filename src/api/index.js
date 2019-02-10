const path =  require('path');
const base = __dirname;
const fs = require('fs');

const options = require(path.join(base, './config.json'))

const { GraphQLServer } = require('graphql-yoga');
const helmet = require('helmet');


const resolvers = {
  Query: {
    info: () => "flow API",
  },
  Mutation: {
  }

};

// Toggle some options if the server is running in development mode.
if (process.env.NODE_ENV === 'development') {
  options.cors = true; // Allow CORS to run frontend dev-server.
  options.playground = '/'; // Allow GraphQL playground for API
}

function useHelmet(express) {
  express.use(helmet());

  if (process.env.NODE_ENV != 'development') { // No CSP in development mode to allow GraphQLPlayground.

    express.use(helmet.contentSecurityPolicy({
      directives: { defaultSrc: ["'self'"], }
    }))
  }
}

// Start the GraphQL server.
fs.readFile(path.join(base,  '../schema.graphql'), (e1, schema) => {
  fs.readFile(path.join(base,  '../model.graphql'), (e2, model) => {
    if (e1 || e2) {
      console.error('Error: Failed to process schema.');
     return -1;
    }

    const typeDefs = model + schema;

    const srv = new GraphQLServer({ typeDefs, resolvers, });
    useHelmet(srv.express);

    srv.start(options, () => console.log(`Accepting connections on port ${options.port}`));
  });
});

