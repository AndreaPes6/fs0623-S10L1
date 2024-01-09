import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';

const BookList = ({ books }) => {
  const [selectedAsin, setSelectedAsin] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = (asin) => {
    console.log('Clicked book with asin:', asin);
    setSelectedAsin(asin);
  };

  return (
    <>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Search a book</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {books
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((b) => (
            <Col xs={12} md={4} key={b.asin}>
              <SingleBook book={b} selectedAsin={selectedAsin} handleClick={handleClick} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default BookList;
