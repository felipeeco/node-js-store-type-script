"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const postgres_pool_1 = require("../libs/postgres.pool");
class UsersService {
    async find() {
        const client = await postgres_pool_1.pool;
        const answer = await client.query('SELECT * FROM tasks');
        return answer.rows;
    }
}
exports.UsersService = UsersService;
