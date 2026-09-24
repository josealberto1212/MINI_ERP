//rutas de clientes
import express from 'express';
import { listarClientes, crearCliente } from '../controllers/clienteController.js';

const router = express.Router();

router.get('/', listarClientes);
router.post('/', crearCliente);

export default router;