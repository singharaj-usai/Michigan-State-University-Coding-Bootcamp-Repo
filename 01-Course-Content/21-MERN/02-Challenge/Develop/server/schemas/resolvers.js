// resolvers.js from 26-Stu_Resolver
const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    me: async (context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async ( { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async ( { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addBook: async ( { book }, context) => {
      if (context.user) {
        const thought = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: book } },
          { new: true },
        );

        return thought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // bookId in Book.js
    removeBook: async ( { bookId }, context) => {
      if (context.user) {
        const dothis = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: {
              savedBooks: {
                bookId: bookId,

              },
            },
          },
          { new: true }
        );
        return dothis;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
