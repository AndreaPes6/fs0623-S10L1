import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';
import Loading from './Loading';

const CommentArea = ({ selectedBook }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${selectedBook?.asin}`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTljMDNlYWUwZGQxZDAwMTgyZDE3OTEiLCJpYXQiOjE3MDQ3MjM0MzQsImV4cCI6MTcwNTkzMzAzNH0.0E2Wrka7eDfAPwXZdjQWwujANn_16U8TbHjoaQWFYMU',
            },
          }
        );

        if (response.ok) {
          const fetchedComments = await response.json();
          setComments(fetchedComments);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (selectedBook) {
      fetchData();
    } else {
      setComments([]);
    }
  }, [selectedBook]);

  return (
    <div className="text-center comment-area" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      {isLoading && <Loading />}
      {isError && <Alert variant="danger">Error - Did you use your auth headers?</Alert>}
      
      <AddComment asin={selectedBook?.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
