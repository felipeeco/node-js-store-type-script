"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = exports.USER_TABLE = void 0;
const sequelize_1 = require("sequelize");
exports.USER_TABLE = 'users';
exports.UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        field: 'created_at',
        defaultValue: sequelize_1.Sequelize.literal('NOW()')
    }
};
class User extends sequelize_1.Model {
    static associate() {
        // Define associations here
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: exports.USER_TABLE,
            modelName: 'User',
            timestamps: false
        };
    }
}
exports.User = User;
