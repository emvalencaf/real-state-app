"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
// modules
const express_1 = __importDefault(require("express"));
// routers
const router = (0, express_1.default)();
exports.Router = router;
const user_1 = require("./user");
// user routes
router.use("/api/users", user_1.userRouter);
// test routes
router.get("/api", (req, res) => {
    res.send("API is working!!");
});
