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
    updateProduct: async (parent, { _id, description, quantity, price }) => {
      let filter = { _id: _id };
      let update = { 
        description: description,
        quantity: quantity,
        price: price
      }


      return await Product.findOneAndUpdate(filter, update, { returnOriginal: false });
    },
    
    deleteProduct: async(parent, {_id}) => {
      return await Product.findOneAndDelete({_id: _id})
    }
  }
};

module.exports = resolvers;
