const { AuthenticationError } = require('apollo-server-express');
const { Product } = require('../models');

const resolvers = {
  Query: {
    products: async () => {
      return await Product.find();
    },
    product: async (parent, { _id }) => {
      return await Product.findOne({_id: _id})
    }
  },
  Mutation: {
    createProduct: async (parent, { name, description, quantity, price }) => {
        return await Product.create({
          name: name,
          description: description,
          quantity: quantity,
          price: price 
        })
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    }
  }
};

module.exports = resolvers;
