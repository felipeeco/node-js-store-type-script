"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logErrors = void 0;
const sequelize_1 = require("sequelize");
function logErrors(error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) {
    if (error instanceof sequelize_1.ValidationError) {
        res.status(409).json({
            message: error.errors[0].message
        });
    }
    else {
        res.status(error.output.statusCode).json({
            message: error.message
        });
    }
}
exports.logErrors = logErrors;
