"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    host: 'localhost',
    port: 5432,
    user: 'nico',
    password: '123',
    database: 'my_store'
});
