import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchPostsByUser } from '../services/api';
import Feed from '../components/Feed';

const FeedPage = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const users = await fetchUsers();
      const allPosts = [];

      for (const userId of Object.keys(users)) {
        const posts = await fetchPostsByUser(userId);
        allPosts.push(...posts);
      }

      const sortedFeed = allPosts.sort((a, b) => b.id - a.id);
      setFeed(sortedFeed);
    };

    fetchFeed();

    const interval = setInterval(fetchFeed, 5000); 
    return () => clearInterval(interval);
  }, []);

  return <Feed posts={feed} />;
};

export default FeedPage;