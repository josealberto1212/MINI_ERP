import {getSecuenciaNCF, crearSecuenciaNCF as crearSecuenciaNCFModel } from "../models/secuencia_ncfModel.js";

export const listarSecuenciaNCF = async (req, res) => {
    try {
        const secuenciasNCF = await getSecuenciaNCF();
        res.json(secuenciasNCF);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const crearSecuenciaNCF = async (req, res) => {
    try {
        const { secuencia_actual, fecha_vencimiento, id_tipo_ncf } = req.body;
        const nuevaSecuenciaNCF = await crearSecuenciaNCFModel({ secuencia_actual, fecha_vencimiento, id_tipo_ncf });
        res.status(201).json(nuevaSecuenciaNCF);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};