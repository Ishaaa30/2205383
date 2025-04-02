import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchPostsByUser } from '../services/api';
import TopUsers from '../components/TopUsers';

const TopUsersPage = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const getTopUsers = async () => {
      const users = await fetchUsers();
      const userPostCounts = await Promise.all(
        Object.keys(users).map(async (userId) => {
          const posts = await fetchPostsByUser(userId);
          return { userId, name: users[userId], postCount: posts.length };
        })
      );

      const sortedUsers = userPostCounts.sort((a, b) => b.postCount - a.postCount).slice(0, 5);
      setTopUsers(sortedUsers);
    };

    getTopUsers();
  }, []);

  return <TopUsers users={topUsers} />;
};

export default TopUsersPage;