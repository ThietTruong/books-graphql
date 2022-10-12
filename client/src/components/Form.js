import React, { useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import { useAuthorsQuery, getBooks } from "../graphql-client/queries";
import { addBookMutation } from "../graphql-client/mutation";
function Forms() {
  const { data, error, loading } = useAuthorsQuery();
  const [addBook] = addBookMutation();
  const [newBook, setNewBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>error...</h2>;
  const handleOnChangeBookInput = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    addBook({
      variables: {
        name: newBook.name,
        genre: newBook.genre,
        authorId: newBook.authorId,
      },
      refetchQueries: [{ query: getBooks }],
    });
  };
  return (
    <Row>
      <Col>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Book name"
              name="name"
              onChange={handleOnChangeBookInput}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Book genre"
              name="genre"
              onChange={handleOnChangeBookInput}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            {loading ? <p>loading...</p> : ""}
            {error ? <p>error....</p> : ""}
            <Form.Control
              as="select"
              defaultValue="Select author"
              name="authorId"
              onChange={handleOnChangeBookInput}
            >
              <option disable>Select author</option>
              {data.authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button className="float-right" variant="info" type="submit">
            Add book
          </Button>
        </Form>
      </Col>
      <Col>
        <Form>
          <Form.Group className="invisible mb-3">
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Author name"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="number" placeholder="Author age"></Form.Control>
          </Form.Group>
          <Button className="float-right" variant="info" type="submit">
            Add author
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
export default Forms;
