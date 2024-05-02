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
exports.ProductsServices = void 0;
const boom = __importStar(require("@hapi/boom"));
const faker_1 = require("@faker-js/faker");
const product_schema_1 = require("../schemas/product.schema");
class ProductsServices {
    constructor() {
        //propierties
        this.products = [];
        while (this.products.length < 100) {
            this.products.push(this.generateProduct());
        }
    }
    generateId() {
        let id;
        if (this.products[0]?.id) {
            id = this.products[this.products.length - 1].id + 1;
        }
        else {
            id = 1;
        }
        return id;
    }
    generateProduct() {
        return {
            id: this.generateId(),
            name: faker_1.faker.commerce.productName(),
            price: +faker_1.faker.commerce.price(),
            description: faker_1.faker.commerce.productDescription(),
            category: faker_1.faker.commerce.department(),
            image: faker_1.faker.image.url()
        };
    }
    create(newProduct) {
        const { error } = product_schema_1.CreateProductSchema.validate(newProduct, {
            abortEarly: false
        });
        return new Promise((resolve, reject) => {
            if (error) {
                reject(boom.badRequest(error));
            }
            else {
                this.products.push(newProduct);
                resolve();
            }
        });
    }
    delete(id) {
        const index = this.products.findIndex((product) => product.id === id);
        return new Promise((resolve, reject) => {
            if (index === -1) {
                reject(boom.notFound());
            }
            else {
                this.products.splice(index, 1);
                resolve();
            }
        });
    }
    async find() {
        return new Promise((resolve) => {
            resolve(this.products);
        });
    }
    findOne(id) {
        return this.products.find((product) => product.id === Number(id));
    }
    update(id, newProduct) {
        const index = this.products.findIndex((product) => product.id === id);
        const { error } = product_schema_1.UpdateProductSchema.validate(newProduct, {
            abortEarly: false
        });
        return new Promise((resolve, reject) => {
            if (index === -1)
                reject(boom.notFound());
            if (error)
                reject(boom.badRequest());
            const product = this.products[index];
            this.products[index] = {
                ...product,
                ...newProduct
            };
            resolve();
        });
    }
}
exports.ProductsServices = ProductsServices;
