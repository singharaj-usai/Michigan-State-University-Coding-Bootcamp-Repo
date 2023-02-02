const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    // Define a resolver to retrieve individual classes
    class: async (parent, args) => {
      // Use the parameter to find the matching class in the collection
      return await Class.findById(args.id).populate('professor');
    },
    professors: async () => {
      return await Professor.find({}).populate('classes');
    }
  }
};

module.exports = resolvers;
