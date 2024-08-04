import { sayHello, validate } from "../controllers/index";
import { Router } from "express";

const router = Router();
router.get("/", sayHello);
router.post("/validate", validate);

export default router;
