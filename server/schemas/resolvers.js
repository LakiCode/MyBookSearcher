const { User, Book } = require('../models');

const resolvers = {
  // query part
  Query: {
    users: async () => {
      return User.find().select('-__v -password');
    },
    // books query part
    books: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Book.find(params).sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
