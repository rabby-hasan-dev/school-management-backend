"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import cookieParser from 'cookie-parser';
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
// app.use(cookieParser());
// app.use(cors({ origin: ['http://localhost:5000'], credentials: true }));
app.use((0, cors_1.default)());
// application routes
// app.use('/api/v1', router);
app.get('/', (req, res) => {
    res.send('Welcome  To Backend World r');
    console.log("test");
});
// app.use(globalErrorHandler);
//Not Found
app.use(notFound_1.default);
exports.default = app;
