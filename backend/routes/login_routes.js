import { Router } from "express";
import { login_controller, listarLogin} from "../controllers/login_controller.js";

const router = Router();

router.post("/", login_controller);
router.get("/", listarLogin);

export default router;