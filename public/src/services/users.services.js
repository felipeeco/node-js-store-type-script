"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const sequelize_1 = require("../libs/sequelize");
class UsersService {
    async find() {
        const results = await sequelize_1.sequelize.models.User.findAll();
        return results;
    }
}
exports.UsersService = UsersService;
