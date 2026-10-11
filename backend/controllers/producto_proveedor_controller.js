import {listar_producto_proveedor, crear_producto_proveedor} from "../models/producto_proveedor_model.js";

// Controlador para listar los productos con su proveedor  
export const listarProductoProveedor = async (req, res) => {
    try {
        const productos_proveedores = await listar_producto_proveedor();
        res.json(productos_proveedores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para crear un nuevo producto con su proveedor
export const crearProductoProveedor = async (req, res) => {
    try {
        const nuevo_producto_proveedor = await crear_producto_proveedor(req.body);
        res.status(201).json(nuevo_producto_proveedor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};