import { getProductos, crearProducto as crearProductoModel } from '../models/productoModel.js';

// se crea un controlador para listar los productos y otro para crear un nuevo producto
export const listarProductos = async (req, res) => {
    try {
        const productos = await getProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//controlador para crear un nuevo producto, se recibe el objeto producto desde el body de la solicitud y se llama a la función crearProducto del modelo para insertar el nuevo producto en la base de datos. Si la operación es exitosa, se devuelve el nuevo producto con un código de estado 201. Si ocurre un error, se devuelve un mensaje de error con un código de estado 500.
export const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await crearProductoModel(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
