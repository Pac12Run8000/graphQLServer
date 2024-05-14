const { gql } = require("apollo-server");

const typeDefs = gql`
    type Boxer {
        id:ID!
        name: String!
        age: Int!
        weight:Float!
        record: String!,
        hometown: String!
    }
    type Query {
        boxers: [Boxer!]!
    }
`;

module.exports = { typeDefs }

