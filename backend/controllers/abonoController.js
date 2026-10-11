import {listar_abono, crear_abono as crear_abono_model } from '../models/abonoModel.js'; 

// controlador para obtener el abono
export const listarAbano = async (req, res) => {
    try {
            const abono = await listar_abono();
            res.json(abono);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
};

// controlador para crear el abono
export const crearAbono = async (req, res) => {
    try {
            const nuevo_abono =  await crear_abono_model(req.body);
            res.status(201).json(nuevo_abono);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
};