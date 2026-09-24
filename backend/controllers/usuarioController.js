import {getUsuarios, crearUsuario as crearUsuarioModel} from  '../models/usuarioModel.js';

// listar todos los usuarios
export const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await getUsuarios(); 
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// crear un nuevo usuario
export const crearUsuario = async (req, res) => {
    try {
        const { usuario, rol } = req.body;
        const nuevoUsuario = await crearUsuarioModel({ usuario, rol });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}