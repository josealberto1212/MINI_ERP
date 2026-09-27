import { getVentas, crearVenta as crearVentaModel } from '../models/ventaModel.js';

// controlador para listar todas las ventas
export const listarVentas = async (req, res) => {
    try {
        const ventas = await getVentas();
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// controlador para crear una nueva venta
export const crearVenta = async (req, res) => {
    try {
        const nuevaVenta = await crearVentaModel(req.body);
        res.status(201).json(nuevaVenta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};