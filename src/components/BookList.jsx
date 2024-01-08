import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';

class BookList extends Component {
  state = {
    selectedAsin: null,
    searchQuery: '',
  };

  handleClick = (asin) => {
    console.log('Clicked book with asin:', asin);
    this.setState({ selectedAsin: asin });
  };

  render() {
    const { books } = this.props;
    const { selectedAsin, searchQuery } = this.state;

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
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {books
            .filter((b) => b.title.toLowerCase().includes(searchQuery))
            .map((b) => (
              <Col xs={12} md={4} key={b.asin}>
                <SingleBook book={b} selectedAsin={selectedAsin} handleClick={this.handleClick} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
