import {getTiposNCF, crearTipoNCF as crearTipoNCFModel } from "../models/tipo_ncfModel.js";

export const listarTiposNCF = async (req, res) => {
    try {
        const tiposNCF = await getTiposNCF();
        res.json(tiposNCF);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const crearTipoNCF = async (req, res) => {
    try {
        const nuevoTipoNCF = await crearTipoNCFModel(req.body);
        res.status(201).json(nuevoTipoNCF);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}  