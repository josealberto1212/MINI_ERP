import { Router } from "express";
import { listarProveedores, crearProveedor } from "../controllers/proveedorController.js";

// Rutas para proveedores
const router = Router();

// Ruta para listar proveedores y crear un nuevo proveedor
router.get('/', listarProveedores);
router.post('/', crearProveedor);

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;