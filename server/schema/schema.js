const { gql } = require("apollo-server-express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;
const typeDefs = gql`
  type Book {
    id: ID!
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }

  #ROOT TYPE
  type Query {
    book(id: ID!): Book
    books: [Book]
    author(id: ID!): Author
    authors: [Author]
  }

  #MUTATION
  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(name: String, genre: String, authorId: ID): Book
  }
`;

module.exports = typeDefs;
