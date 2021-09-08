import React from 'react';
import { useRouter } from 'next/router';

const ClientProjects: React.FC = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler: () => void = () => {
    router.push('/clients/1/projectA');
  };

  return (
    <div>
      <h1>ClientProjects</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
};

export default ClientProjects;
