import {  Router } from 'express';
import { crearCategoria} from '../controllers/categoriaController.js';
import { listarCategorias } from '../controllers/categoriaController.js';

const router = Router();

router.get('/', listarCategorias);
router.post('/', crearCategoria);

export default router;