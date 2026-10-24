import { Router } from "express";
import { listarUsuarios, crearUsuario } from "../controllers/usuarioController.js";
import { validarRole } from "../middlewares/roles.js";

// Rutas para usuarios
const router = Router();    

// Ruta para listar usuarios y crear un nuevo usuario
router.get('/', validarRole('administrador'), listarUsuarios);
router.post('/', validarRole('administrador'), crearUsuario); 


// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

