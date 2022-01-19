const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Product {
    _id: ID
    name: String
    description: String
    quantity: Int
    price: Float
  }
  
  type Query {
    products: [Product]
    product(_id: ID!): Product  
  }
  type Mutation {
    createProduct(name: String!, description: String, quantity: Int, price: Float): Product
    updateProduct(_id: ID!, name: String, description: String, quantity: Int!, price: Float): Product
    deleteProduct(_id: ID!): Product
  }
`;

module.exports = typeDefs;