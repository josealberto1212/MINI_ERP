import { Router } from 'express';
import {listarAbano, crearAbono} from "../controllers/abonoController.js";

const router = Router();

router.get('/', listarAbano);
router.post('/', crearAbono);

export default router;