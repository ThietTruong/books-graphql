const Book = require("../models/Book");
const mongoBookMethods = {
  getAllBooks: async () => {
    return await Book.find();
  },
  getBookById: async (id) => {
    return await Book.findById(id);
  },
  getBookByAuthorId: async (id) => {
    return await Book.find({ authorId: id });
  },
};

module.exports = mongoBookMethods;
