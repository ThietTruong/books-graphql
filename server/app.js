const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const mongoAuthorMethods = require("./api/author.db");
const mongoBookMethods = require("./api/book.db");
//  load schema & resolver
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

//Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@graphql-herry.iq5u8hv.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
connectDB();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoAuthorMethods, mongoBookMethods }),
});

const app = express();
server.start().then((res) => {
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () =>
    console.log("Server ready at http://localhost:4000" + server.graphqlPath)
  );
});
