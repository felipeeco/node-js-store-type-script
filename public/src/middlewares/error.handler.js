"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logErrors = void 0;
function logErrors(error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) {
    res.status(error.output.statusCode).json({
        message: error.message
    });
}
exports.logErrors = logErrors;
