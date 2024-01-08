import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const deleteComment = async (id) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + id,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTljMDNlYWUwZGQxZDAwMTgyZDE3OTEiLCJpYXQiOjE3MDQ3MjM0MzQsImV4cCI6MTcwNTkzMzAzNH0.0E2Wrka7eDfAPwXZdjQWwujANn_16U8TbHjoaQWFYMU',
          },
        }
      )
      if (response.ok) {
        alert('Comment was deleted successfully!')
      } else {
        alert('Error - comment was NOT deleted!')
      }
    } catch (error) {
      alert('Error - comment was NOT deleted!')
    }
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
