"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const postgres_1 = require("../libs/postgres");
class UsersService {
    async find() {
        const client = await (0, postgres_1.getConnection)();
        const answer = await client.query('SELECT * FROM tasks');
        return answer.rows;
    }
}
exports.UsersService = UsersService;
