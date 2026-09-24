import { Router } from "express";
import { listarUsuarios, crearUsuario } from "../controllers/usuarioController.js";

// Rutas para usuarios
const router = Router();    

// Ruta para listar usuarios y crear un nuevo usuario
router.get('/', listarUsuarios);
router.post('/', crearUsuario); 

// Exportar el router para que pueda ser utilizado en otros archivos
export default router;

