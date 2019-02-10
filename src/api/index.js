const path =  require('path');

const { GraphQLServer } = require('graphql-yoga');

const typeDefs = path.join(__dirname,  '../schema.graphql');
const resolvers = {
  Query: {
    info: () => "flow API",
  },
  Mutation: {
  }

};

const srv = new GraphQLServer({ typeDefs, resolvers, });
srv.start(() => console.log(`Server running on port 4000`));
