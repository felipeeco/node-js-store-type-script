"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.categoriesRouter = router;
router.get('/:categoryId/products/:productsId', (req, res) => {
    const { categoryId, productsId } = req.params;
    res.json({
        categoryId,
        productsId,
        price: 2000
    });
});
router.get('/', (req, res) => {
    res.json([
        {
            name: 'category 1'
        },
        {
            name: 'category 2'
        }
    ]);
});
