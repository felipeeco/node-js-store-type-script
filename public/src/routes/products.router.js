"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_services_1 = require("../../services/products.services");
const router = (0, express_1.Router)();
exports.productsRouter = router;
const service = new products_services_1.ProductsServices();
router.get('/', async (req, res, next) => {
    try {
        const products = await service.find();
        res.json(products);
    }
    catch (error) {
        next(error);
    }
});
//la ruta que no es dinamica siempre va de primero
router.get('/filter', (req, res) => {
    res.send('Hello, I am the answer');
});
//est ruta es dinamica y va despues con el fin de evitar que se pise la url
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const products = await service.findOne(+id);
        if (products) {
            res.status(200).json(products);
        }
        else {
            res.status(404).json([
                {
                    message: 'Not found it'
                }
            ]);
        }
    }
    catch (error) {
        next(error);
    }
});
router.post('/create-product', async (req, res, next) => {
    try {
        const product = {
            id: service.generateId(),
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            image: req.body.image
        };
        await service.create(product);
        res.status(201).json({
            message: 'created'
        });
    }
    catch (error) {
        next(error);
    }
});
router.put('/update-product/:id', async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
        await service.update(Number(id), body);
        res.status(200).json({
            message: 'updated'
        });
    }
    catch (error) {
        next(error);
    }
});
router.put('/delete-product/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        await service.delete(Number(id));
        res.status(200).json({
            message: 'deleted'
        });
    }
    catch (error) {
        next(error);
    }
});
