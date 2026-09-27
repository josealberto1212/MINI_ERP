import { Router } from "express";
import { listarSecuenciaNCF, crearSecuenciaNCF } from "../controllers/secuencia_ncfController.js";

const router = Router(); 

// Ruta para obtener todas las secuencias NCF
router.get("/", listarSecuenciaNCF);

// Ruta para crear una nueva secuencia NCF
router.post("/", crearSecuenciaNCF);

export default router;
