const { AuthenticationError } = require('apollo-server-express');
const { Product, Category } = require('../models');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async () => {
      return await Product.find();
    },
  },
  Mutation: {
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    }
  }
};

module.exports = resolvers;
