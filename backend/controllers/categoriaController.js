//controlador de categoria
import { getCategorias, crearCategoria as crearCategoriaModel } from '../models/categoriaModel.js';

export const listarCategorias = async (req, res) => {
    try {
        const categorias = await getCategorias();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const crearCategoria = async (req, res) => {
    try {
        const { codigo, nombre } = req.body;
        const nuevaCategoria = await crearCategoriaModel(codigo, nombre);
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
