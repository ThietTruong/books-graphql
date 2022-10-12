import { gql, useQuery } from "@apollo/client";
const getBooks = gql`
  query getBooksQuery {
    books {
      id
      name
    }
  }
`;

const getBook = gql`
  query getBookQuery($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
          genre
        }
      }
    }
  }
`;

const getAuthors = gql`
  query getAuthorsQuery {
    authors {
      id
      name
      age
      books {
        id
        name
        genre
      }
    }
  }
`;

const useBookQuery = (data) => useQuery(getBook, data);
const useBooksQuery = () => useQuery(getBooks);
const useAuthorsQuery = () => useQuery(getAuthors);
export { getBooks, useBookQuery, useBooksQuery, useAuthorsQuery };
