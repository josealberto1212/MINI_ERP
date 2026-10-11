import {listar_detalle_venta, crear_detalle_venta } from '../models/detalle_venta_model.js';

// controlador para obtener el detalle de venta
export const listarDetalleVenta = async (req, res) => {
    try { 
        const detalle_venta = await listar_detalle_venta();
        res.json(detalle_venta);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// controlador para crear el detalle de venta
export const crearDetalleVenta = async (req, res) => {
    try {
        const nuevo_detalle_venta =  await crear_detalle_venta(req.body);
        res.status(201).json(nuevo_detalle_venta);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};