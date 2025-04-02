import React from 'react';

const TopUsers = ({ users }) => {
  return (
    <div>
      <h2>Top Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>
            {user.name} - {user.postCount} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;