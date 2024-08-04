import { base64ToUint8ClampedArray } from "../helpers/base64ToUintClampedArray";
import { extractHashFromImage } from "../helpers/extractHashFromImage";
import { generateHash } from "../helpers/generateHash";
import { Request, Response } from "express";

export const sayHello = (req: Request, res: Response) => {
  res.send("Hello World 1!");
};

export const validate = (req: Request, res: Response) => {
  const data = req.body;
  const base64Image = data.image;
  const holes = data.holes;

  const image = base64ToUint8ClampedArray(base64Image);
  const hash = extractHashFromImage(image, holes, 256);
  const hashBuffer = generateHash(image, holes);
  
  const isValid = hash === hashBuffer

  if (isValid) {
    res.status(200).json({ resultado: isValid });
    return;
  } else {
    res.status(400).json({ resultado: isValid });
    return;
  }
};

module.exports = {
  sayHello,
  validate,
};
