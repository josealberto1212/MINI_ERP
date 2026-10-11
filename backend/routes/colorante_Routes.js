import { Router } from "express";
import { listarColorante, crearColorante } from "../controllers/colorante_controller.js";

const router = Router();

router.get("/", listarColorante);
router.post("/", crearColorante);

export default router; 