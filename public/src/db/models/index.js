"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupModels = void 0;
const user_model_1 = require("./user.model");
function setupModels(sequelize) {
    user_model_1.User.init(user_model_1.UserSchema, user_model_1.User.config(sequelize));
}
exports.setupModels = setupModels;
