"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
// start express
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Routes
app.get('/api', (req, res) => {
    res.send('Hello, TypeScript Express!');
});
// Router
(0, routes_1.routerApiV2)(app);
// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
