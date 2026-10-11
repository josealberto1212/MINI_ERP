import { Router } from "express";
import { listar_VentaCredito, crear_VentaCredito } from "../controllers/venta_creditoController.js";

const router = Router();

// Ruta para obtener todas las ventas a crédito
router.get("/", listar_VentaCredito);  

// Ruta para crear una nueva venta a crédito
router.post("/", crear_VentaCredito);

export default router;