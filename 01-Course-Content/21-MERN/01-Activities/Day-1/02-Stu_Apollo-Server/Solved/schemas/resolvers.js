const { Class } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    classes: async () => {
      // Get and return all documents from the classes collection
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
