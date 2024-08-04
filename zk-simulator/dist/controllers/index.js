"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.sayHello = void 0;
const base64ToUintClampedArray_1 = require("../helpers/base64ToUintClampedArray");
const extractHashFromImage_1 = require("../helpers/extractHashFromImage");
const generateHash_1 = require("../helpers/generateHash");
const sayHello = (req, res) => {
    res.send("Hello World 1!");
};
exports.sayHello = sayHello;
const validate = (req, res) => {
    const data = req.body;
    const base64Image = data.image;
    const holes = data.holes;
    const image = (0, base64ToUintClampedArray_1.base64ToUint8ClampedArray)(base64Image);
    const hash = (0, extractHashFromImage_1.extractHashFromImage)(image, holes, 256);
    const hashBuffer = (0, generateHash_1.generateHash)(image, holes);
    const isValid = hash === hashBuffer;
    if (isValid) {
        res.status(200).json({ resultado: isValid });
        return;
    }
    else {
        res.status(400).json({ resultado: isValid });
        return;
    }
};
exports.validate = validate;
module.exports = {
    sayHello: exports.sayHello,
    validate: exports.validate,
};
