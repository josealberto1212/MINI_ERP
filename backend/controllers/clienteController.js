import  {getClientes, crearCliente as crearClienteModel } from '../models/clienteModel.js';

// enlistar todos los clientes
export const listarClientes = async (req, res) => {
    try {
        const clientes = await getClientes();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// crear un nuevo cliente
export const crearCliente = async (req, res) => {
    try {
        const { cedula, nombre, telefono, limite_credito, rnc } = req.body;
        const nuevoCliente = await crearClienteModel({ cedula, nombre, telefono, limite_credito, rnc });
        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};