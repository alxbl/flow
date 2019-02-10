const path =  require('path');
const fs = require('fs');

const { GraphQLServer } = require('graphql-yoga');

const resolvers = {
  Query: {
    info: () => "flow API",
  },
  Mutation: {
  }

};

fs.readFile(path.join(__dirname,  '../schema.graphql'), (e1, schema) => {
  fs.readFile(path.join(__dirname,  '../model.graphql'), (e2, model) => {
    if (e1 || e2) {
      console.error('Error: Failed to process schema.');
     return -1;
    }
    const typeDefs = schema + model;

    const srv = new GraphQLServer({ typeDefs, resolvers, });
    srv.start(() => console.log(`Server running on port 4000`));
  });
});

