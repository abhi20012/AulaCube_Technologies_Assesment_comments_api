




const CommentDetail = ({ postId, comments })  => {
  return (
    <div className="comment-detail">
      <h2>Comments for Post #{postId}</h2>
	  {/* mapping all the comments into this div box as list */}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>Comment:</strong> {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentDetail;
