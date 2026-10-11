import {Router} from "express";
import {listar_formula_color_Colorante,crearFormulaColorColorante } from "../controllers/formula_color_colorante_controller.js";

const router = Router();

router.get("/", listar_formula_color_Colorante);
router.post("/", crearFormulaColorColorante);

export default router;