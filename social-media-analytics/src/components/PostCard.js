import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div>
      <h3>{post.content}</h3>
      <p>Comments: {post.commentCount}</p>
    </div>
  );
};

export default PostCard;