"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const users_services_1 = require("../services/users.services");
const router = (0, express_1.Router)();
exports.usersRouter = router;
const service = new users_services_1.UsersService();
let users = [];
router.get('/', async (req, res, next) => {
    try {
        users = await service.find();
        res.json(users);
    }
    catch (error) {
        next(error);
    }
});
