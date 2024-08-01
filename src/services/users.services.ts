import { getConnection } from '../libs/postgres';

export class UsersService {
 async find() {
   const client = await getConnection();
   const answer = await client.query('SELECT * FROM tasks');
   return answer.rows;
 }
}