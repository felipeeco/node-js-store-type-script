"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
// start express
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
// Routes
app.get('/', (req, res) => {
    res.send('Hello, TypeScript Express!');
});
// Router
(0, routes_1.routerApiV2)(app);
// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
