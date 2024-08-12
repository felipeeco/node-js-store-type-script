"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const boom = __importStar(require("@hapi/boom"));
const sequelize_1 = require("../libs/sequelize");
const user_schema_1 = require("../schemas/user.schema");
class UsersService {
    async find() {
        const results = await sequelize_1.sequelize.models.User.findAll();
        return results;
    }
    async findOne(id) {
        try {
            const user = await sequelize_1.sequelize.models.User.findByPk(id);
            if (!user)
                throw boom.notFound('User not found');
            return user;
        }
        catch (err) {
            throw boom.internal('Failed to find user', err);
        }
    }
    async create(newUser) {
        const { error } = user_schema_1.UserSchema.validate(newUser, {
            abortEarly: false
        });
        if (error) {
            throw boom.badRequest(error);
        }
        else {
            try {
                await sequelize_1.sequelize.models.User.create(newUser);
            }
            catch (err) {
                throw boom.internal('Failed to create user', err);
            }
        }
    }
    async update(id, changes) {
        const { error } = user_schema_1.UserSchema.validate(changes, {
            abortEarly: false
        });
        const user = await this.findOne(id);
        if (error)
            throw boom.badRequest(error);
        if (!user)
            throw boom.notFound();
        try {
            await user?.update(changes);
        }
        catch (err) {
            throw boom.internal('Failed to update user', err);
        }
    }
    async delete(id) {
        const user = await this.findOne(id);
        if (!user) {
            throw boom.notFound();
        }
        else {
            try {
                await user?.destroy;
            }
            catch (err) {
                throw boom.internal('Failed to delete user', err);
            }
        }
    }
}
exports.UsersService = UsersService;
