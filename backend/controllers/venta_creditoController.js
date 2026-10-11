import {listarVentaCredito, crear_VentaCredito as crearVentaCreditoModel} from '../models/venta_creditoModel.js';

// controlador para ventas a credito
export const listar_VentaCredito = async (req, res) => {
    try {
        const ventasCredito = await listarVentaCredito();
        res.json(ventasCredito);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//crear una nueva venta a credito  
export const crear_VentaCredito = async (req, res) => {
    try {
        const nuevaVentaCredito = await crearVentaCreditoModel(req.body);
        res.status(201).json(nuevaVentaCredito);
    } catch (error) {
        res.status(500).json({ message: error.messag  });
    }
};