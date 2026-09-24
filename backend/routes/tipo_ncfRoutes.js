import { Router } from "express";
import { listarTiposNCF, crearTipoNCF } from "../controllers/tipo_ncfController.js";

// Rutas para tipos de NCF
const router = Router();   

// Ruta para listar tipos de NCF y crear un nuevo tipo de NCF
router.get('/', listarTiposNCF);
router.post('/', crearTipoNCF); 

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;