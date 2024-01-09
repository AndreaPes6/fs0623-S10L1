import React, { useState, useEffect } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    if (isDeleted) {
      alert('Comment was deleted successfully!');
    }
  }, [isDeleted]);

  const deleteComment = async (id) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + id,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkNDY2MGU2Mjg4NjAwMTg4M2YzYTAiLCJpYXQiOjE3MDQ4MDU5ODQsImV4cCI6MTcwNjAxNTU4NH0.C1_qCOKf3aSRkcQ981ufLNhHIZXh8_ZqDf0oJZnC86I',
          },
        }
      );

      if (response.ok) {
        setIsDeleted(true);
      } else {
        alert('Error - comment was NOT deleted!');
      }
    } catch (error) {
      alert('Error - comment was NOT deleted!');
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
        disabled={isDeleted}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
