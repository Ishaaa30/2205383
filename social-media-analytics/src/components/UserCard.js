import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Posts: {user.postCount}</p>
    </div>
  );
};

export default UserCard;