// controlador para proveedores
import {getProveedores, crearProveedor as crearProveedorModel } from '../models/proveedorModel.js';

// enlistar todos los proveedores
export const listarProveedores = async (req, res) => {
    try {
        const proveedores = await getProveedores();  
        res.json(proveedores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//crear un nuevo proveedor
export const crearProveedor = async (req, res) => {
    try {
        const { rnc, nombre } = req.body;
        const nuevoProveedor = await crearProveedorModel({ rnc, nombre });
        res.status(201).json(nuevoProveedor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};