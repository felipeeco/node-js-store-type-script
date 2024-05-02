"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApiV2 = exports.routerApi = void 0;
const express_1 = require("express");
const categories_router_1 = require("./categories.router");
const users_router_1 = require("./users.router");
const products_router_1 = require("./products.router");
const error_handler_1 = require("@middlewares/error.handler");
function routerApi(app) {
    const router = (0, express_1.Router)();
    app.use('/api/v1', router);
    router.use('/categories', categories_router_1.categoriesRouter);
    router.use('/products', products_router_1.productsRouter);
    router.use('/users', users_router_1.usersRouter);
}
exports.routerApi = routerApi;
function routerApiV2(app) {
    const router = (0, express_1.Router)();
    app.use('/api/v2', router);
    router.use('/categories', categories_router_1.categoriesRouter);
    router.use('/products', products_router_1.productsRouter);
    router.use('/users', users_router_1.usersRouter);
    router.use(error_handler_1.logErrors);
}
exports.routerApiV2 = routerApiV2;
