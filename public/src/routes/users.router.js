"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const users_services_1 = require("../services/users.services");
const router = (0, express_1.Router)();
exports.usersRouter = router;
const service = new users_services_1.UsersService();
router.get('/', async (req, res, next) => {
    try {
        const users = await service.find();
        res.json(users);
    }
    catch (error) {
        next(error);
    }
});
router.post('/create-user', async (req, res, next) => {
    try {
        const body = await req.body;
        await service.create(body);
        res.status(201).json({
            message: 'user created'
        });
    }
    catch (error) {
        next(error);
    }
});
