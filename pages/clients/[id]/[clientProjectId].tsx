import React from 'react';
import { useRouter } from 'next/router';

const SelectedClientProject: React.FC = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>SelectedClientProject</div>;
};

export default SelectedClientProject;
