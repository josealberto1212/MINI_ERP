import { Router } from "express";
import { listarProductos, crearProducto } from "../controllers/productoController.js";

// Rutas para productos
const router = Router();    

// Ruta para listar productos y crear un nuevo producto
router.get('/', listarProductos);
router.post('/', crearProducto);    

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;
