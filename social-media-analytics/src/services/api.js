import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/evaluation-service';
const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjExMjU2LCJpYXQiOjE3NDM2MTA5NTYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImMyNjJlZjMxLThiYzMtNDU4OC1iMTlhLTMzMmU2NDdjNjM0ZCIsInN1YiI6ImlzaGhhYS4yMDIyQGdtYWlsLmNvbSJ9LCJlbWFpbCI6ImlzaGhhYS4yMDIyQGdtYWlsLmNvbSIsIm5hbWUiOiJpc2hhIC4iLCJyb2xsTm8iOiIyMjA1MzgzIiwiYWNjZXNzQ29kZSI6Im53cHdyWiIsImNsaWVudElEIjoiYzI2MmVmMzEtOGJjMy00NTg4LWIxOWEtMzMyZTY0N2M2MzRkIiwiY2xpZW50U2VjcmV0IjoiUFhOWkJGQVducGRuZEN6cSJ9._33inPwOIlhx_tbDKiE_khYx67TQ6FCHu49na4WdPRM'; // Replace with your actual token

export const fetchUsers = async () => {
  const response = await axios.get('/evaluation-service/users', {
    headers: {
      Authorization: TOKEN,
    },
  });
  return response.data.users;
};

export const fetchPostsByUser = async (userId) => {
  const response = await axios.get(`/evaluation-service/users/${userId}/posts`, {
    headers: {
      Authorization: TOKEN,
    },
  });
  return response.data.posts;
};

export const fetchCommentsByPost = async (postId) => {
  const response = await axios.get(`/evaluation-service/posts/${postId}/comments`, {
    headers: {
      Authorization: TOKEN,
    },
  });
  return response.data.comments;
};