// using react hooks to manage its states
import React, { useState, useEffect } from 'react';
import './App.css';

//importing components
import CommentList from './components/CommentList';
import CommentFilter from './components/CommentFilter';
import CommentDetail from './components/CommentDetail';

function App() {
  const [comments, setComments] = useState([]);
  const [postIdFilter, setPostIdFilter] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedPostComments, setSelectedPostComments] = useState([]);

  useEffect(() => {
    //fetching the comment data from the given link, as data will be from outside so we have to do error handling we can use [try, catch] block but I have used (.then).
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data.slice(0, 100))); // Limit to the first 100 comments
  }, []);

  const selectPost = (postId) => {
    setSelectedPostId(postId);

    // Fetch and set comments associated with the selected postId
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((data) => setSelectedPostComments(data));
  };

  const filteredComments = comments.filter((comment) =>
    comment.postId.toString().includes(postIdFilter)
  );

  return (
    <div className="app">
          <div className="left" style={{width:'30%'}}>
            <CommentFilter postIdFilter={postIdFilter} setPostIdFilter={setPostIdFilter} />
            <CommentList comments={filteredComments} selectPost={selectPost} />
          </div>
          <div className="right" style={{width:'70%'}}>
            {selectedPostId && <CommentDetail postId={selectedPostId} comments={selectedPostComments} />}
          </div>
      </div>
  );
}

export default App;
