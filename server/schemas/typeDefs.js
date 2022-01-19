const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }
  type Product {
    _id: ID
    name: String
    description: String
    quantity: Int
    price: Float
    category: Category
  }
  
  type Query {
    categories: [Category]
    products: [Product]
  }
  type Mutation {
    createProduct(name: String!, description: String, quantity: Int, price: Float!, category: ID): Product
    updateProduct(_id: ID!, quantity: Int!): Product
  }
`;

module.exports = typeDefs;