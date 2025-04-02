import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchPostsByUser, fetchCommentsByPost } from '../services/api';
import TrendingPosts from '../components/TrendingPosts';

const TrendingPostsPage = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const getTrendingPosts = async () => {
      const users = await fetchUsers();
      const allPosts = [];

      for (const userId of Object.keys(users)) {
        const posts = await fetchPostsByUser(userId);
        allPosts.push(...posts);
      }

      const postCommentCounts = await Promise.all(
        allPosts.map(async (post) => {
          const comments = await fetchCommentsByPost(post.id);
          return { ...post, commentCount: comments.length };
        })
      );

      const maxCommentCount = Math.max(...postCommentCounts.map((post) => post.commentCount));
      const trending = postCommentCounts.filter((post) => post.commentCount === maxCommentCount);

      setTrendingPosts(trending);
    };

    getTrendingPosts();
  }, []);

  return <TrendingPosts posts={trendingPosts} />;
};

export default TrendingPostsPage;