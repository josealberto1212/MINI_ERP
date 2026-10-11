import {Router} from "express";
import {listarDetalleVenta, crearDetalleVenta} from "../controllers/detalle_venta_controller.js";

const router = Router();

router.get("/", listarDetalleVenta);
router.post("/", crearDetalleVenta);

export default router;