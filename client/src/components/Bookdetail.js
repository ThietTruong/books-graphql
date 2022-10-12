import React from "react";
import { Card } from "react-bootstrap";
import { useBookQuery } from "../graphql-client/queries";
function BookDetail({ bookId }) {
  const { loading, error, data } = useBookQuery({
    variables: {
      id: bookId,
    },
    skip: bookId === null,
  });
  const book = !loading && !error ? data?.book : null;
  return (
    <Card>
      <Card.Body>
        {book == null ? (
          <Card.Text>Please select a book</Card.Text>
        ) : (
          <>
            <Card.Title>{book.name}</Card.Title>
            <Card.Subtitle>{book.genre}</Card.Subtitle>
            <Card.Text>
              <p>{book.author.name}</p>
              <p>Age: {book.author.age}</p>
              <p>All books by this author</p>
              {loading ? <p>loading...</p> : ""}
              {error ? <p>error....</p> : ""}
              <ul>
                {book.author.books.map((book) => (
                  <li key={book.id}>{book.name}</li>
                ))}
              </ul>
            </Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default BookDetail;
