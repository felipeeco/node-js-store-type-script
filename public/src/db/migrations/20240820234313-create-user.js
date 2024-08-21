"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../models/user.model");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable(user_model_1.USER_TABLE, user_model_1.UserSchema);
    },
    async down(queryInterface) {
        await queryInterface.dropTable(user_model_1.USER_TABLE);
    }
};
