import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';

const SingleBook = ({ book, selectedAsin, handleClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(book.asin === selectedAsin);
  }, [book.asin, selectedAsin]);

  return (
    <>
      <Card
        onClick={() => handleClick(book.asin)}
        style={{ border: isSelected ? '3px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
      {isSelected && <CommentArea asin={book.asin} />}
    </>
  );
};

export default SingleBook;
