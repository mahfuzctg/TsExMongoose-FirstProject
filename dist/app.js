"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parserJ
app.use(express_1.default.json());
app.use(cors_1.default);
//
app.get('/', (req, res) => {
    var a = 10;
    res.send(a);
});
exports.default = app;
// console.log(process.cwd());
