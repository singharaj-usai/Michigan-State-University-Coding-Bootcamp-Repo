const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor',
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    class: async (parent, args) => {
      return await Class.findById(args.id).populate('professor');
    },
    professors: async () => {
      return await Professor.find({}).populate('classes');
    },
  },
  // Define the functions that will fulfill the mutations
  Mutation: {
    addSchool: async (parent, { name, location, studentCount }) => {
      // Create and return the new School object
      return await School.create({ name, location, studentCount });
    },
  },
};

module.exports = resolvers;
