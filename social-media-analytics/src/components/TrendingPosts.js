import React from 'react';

const TrendingPosts = ({ posts }) => {
  return (
    <div>
      <h2>Trending Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.content} - {post.commentCount} comments
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;