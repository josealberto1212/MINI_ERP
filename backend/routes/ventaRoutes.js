import { Router } from "express";
import { listarVentas, crearVenta } from "../controllers/ventaController.js";

// Rutas para ventas
const router = Router();   

// Ruta para listar ventas y crear una nueva venta
router.get('/', listarVentas);
router.post('/', crearVenta);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;