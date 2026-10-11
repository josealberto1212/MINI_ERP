import { Router } from "express";
import { listarBase, crearBase} from '../controllers/base_pintura_controller.js';

const router = Router();

router.get('/', listarBase);
router.post('/', crearBase);

export default router; 