const { ApolloServer } = require("apollo-server");
const { typeDefs } = require('./schema/Type-Defs');
const { resolvers } = require('./schema/Resolvers');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, // Ensure introspection is explicitly enabled
  });
  

server.listen().then(({ url }) => {
    console.log(`Your App Is Running: ${url}`)
})