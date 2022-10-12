const Author = require("../models/Author");
const mongoAuthorMethods = {
  getAllAuthors: async () => {
    return await Author.find();
  },
  getAuthorById: async (id) => {
    return await Author.findById(id).exec();
  },
};

module.exports = mongoAuthorMethods;
