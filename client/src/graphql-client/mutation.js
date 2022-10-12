import { gql, useMutation } from "@apollo/client";

const addBook = gql`
  mutation addBookMutation($name: String, $genre: String, $authorId: ID!) {
    createBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

// eslint-disable-next-line react-hooks/rules-of-hooks
const addBookMutation = (newBook) => useMutation(addBook);
export { addBookMutation };
