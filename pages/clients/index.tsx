import React from 'react';
import Link from 'next/link';

const Clients: React.FC = () => {
  const clients = [
    {
      id: '1',
      name: 'Luka',
    },
    {
      id: '2',
      name: 'Marko',
    },
    {
      id: '3',
      name: 'Stefan',
    },
  ];

  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={{ pathname: '/clients/[id]', query: { id: client.id } }}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
