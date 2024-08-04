"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../controllers/index");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", index_1.sayHello);
router.post("/validate", index_1.validate);
exports.default = router;
