import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import { Container, Row, Col } from 'react-bootstrap';
import AllTheBooks from './components/AllTheBooks';
import CommentArea from './components/CommentArea';

import fantasy from './data/fantasy.json';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Container fluid>
      <MyNav />
      <Row>
        <Col xs={12} md={6}>
          <AllTheBooks onBookSelect={(book) => setSelectedBook(book)} />
        </Col>
        <Col xs={12} md={6}>
          <CommentArea selectedBook={selectedBook} />
        </Col>
      </Row>

      <MyFooter />
    </Container>
  );
}

export default App;
