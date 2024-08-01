import { Client } from 'pg';

export async function getConnection(): Promise<Client> {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'nico',
    password: '123',
    database: 'my_store'
  });

  await client.connect();
  return client;
}
