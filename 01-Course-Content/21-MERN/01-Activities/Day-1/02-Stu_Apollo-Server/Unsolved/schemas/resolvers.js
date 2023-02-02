const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
