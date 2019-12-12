const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const greetings = [
    {
        hello: 'Hello world',
        goodbye: 'Goodbye world'

    },
    {
        hello: 'Hola',
        goodbye: 'Adios'
    }
]

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});