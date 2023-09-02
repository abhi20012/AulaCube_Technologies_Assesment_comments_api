

const CommentList = ({ comments, selectPost }) => {
  return (
    <div className="comment-list">
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} onClick={() => selectPost(comment.postId)}>
            <strong>Post:</strong> {comment.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
