"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.whiteList = void 0;
exports.whiteList = ['http://127.0.0.1:5500', 'http://localhost:5050'];
exports.options = {
    origin: (origin, callback) => {
        if (exports.whiteList.includes(origin))
            callback(null, true);
        else
            callback(new Error('Access forbidden'));
    }
};
