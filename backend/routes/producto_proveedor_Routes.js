import {Router} from "express";
import {listarProductoProveedor,crearProductoProveedor } from "../controllers/producto_proveedor_controller.js";

const router = Router();

router.get("/", listarProductoProveedor);
router.post("/", crearProductoProveedor);

export default router;