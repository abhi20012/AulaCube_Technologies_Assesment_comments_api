import React from 'react';



const CommentFilter = ({ postIdFilter, setPostIdFilter }) => {
  return (
    <div className="comment-filter">
      <label htmlFor="postIdInput"> <h2>Filter by postId: </h2></label>
      <input
        type="text"
        id="postIdInput"
		placeholder='Enter post id -  e.g, 1'
        value={postIdFilter}
        onChange={(e) => setPostIdFilter(e.target.value)}
      />
    </div>
  );
}

export default CommentFilter;
