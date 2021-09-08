import React from 'react';
import { useRouter } from 'next/router';

const Project: React.FC = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return <div>Project</div>;
};

export default Project;
