import {listar_formula_color_colorante, crear_formula_color_colorante} from '../models/formula_color_colorante_model.js';

export const listar_formula_color_Colorante = async (req, res) => {
    try {
        const formula_color_colorante = await listar_formula_color_colorante();
        res.json(formula_color_colorante);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const crearFormulaColorColorante = async (req, res) => {
    try {
        const nuevo_formula_color_colorante = await crear_formula_color_colorante(req.body);
        res.status(201).json(nuevo_formula_color_colorante);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};