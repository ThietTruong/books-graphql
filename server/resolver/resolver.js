const { authors, books } = require("../data/static");
const Author = require("../models/Author");
const Book = require("../models/Book");
const resolvers = {
  Query: {
    book: async (parent, args, context) => {
      return await context.mongoBookMethods.getBookById(args.id);
    },
    books: async (parent, args, context) => {
      return await context.mongoBookMethods.getAllBooks();
    },
    author: async (parent, args, context) => {
      return await context.mongoAuthorMethods.getAuthorById(args.id);
    },
    authors: async (parent, args, context) => {
      return await context.mongoBookMethods.getAllBooks();
    },
  },
  Book: {
    author: async (parent, args, context) => {
      return await context.mongoAuthorMethods.getAuthorById(parent.authorId);
    },
  },
  Author: {
    books: async (parent, args, context) => {
      return await context.mongoBookMethods.getBookByAuthorId(parent.id);
    },
  },
  Mutation: {
    createAuthor: async (parent, args) => {
      const newAuthor = new Author(args);
      return await newAuthor.save();
    },

    createBook: async (parent, args) => {
      const newBook = new Book(args);
      return await newBook.save();
    },
  },
};

module.exports = resolvers;
