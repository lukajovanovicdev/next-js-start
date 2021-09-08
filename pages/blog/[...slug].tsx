import React from 'react';
import { useRouter } from 'next/router';

const BlogPosts: React.FC = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>BlogPosts</div>;
};

export default BlogPosts;
