import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { useBooksQuery } from "../graphql-client/queries";
import BookDetail from "./Bookdetail";

function BookList() {
  const { loading, error, data } = useBooksQuery();
  const [bookSelected, setBookSeleted] = useState(null);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error....</p>;
  const handleRederBookList = () => {
    const { books } = data;
    return (
      <>
        {books.map((book) => (
          <Card
            key={book.id}
            border="infor"
            text="infor"
            className="text-center shadow"
            onClick={() => setBookSeleted(book.id)}
          >
            <Card.Body>{book.name}</Card.Body>
          </Card>
        ))}
      </>
    );
  };
  return (
    <Row>
      <Col xs={8}>{handleRederBookList()}</Col>
      <Col xs={4}>
        <BookDetail bookId={bookSelected} />
      </Col>
    </Row>
  );
}
export default BookList;
