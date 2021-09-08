import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
