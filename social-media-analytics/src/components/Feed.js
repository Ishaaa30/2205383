import React from 'react';

const Feed = ({ posts }) => {
  return (
    <div>
      <h2>Feed</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;