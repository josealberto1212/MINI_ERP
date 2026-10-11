import { Router } from "express";
import { listarFormula, crearFormula } from "../controllers/formula_controller.js";

const router = Router();

router.get("/", listarFormula);
router.post("/", crearFormula);

export default router;