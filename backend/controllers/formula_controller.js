import { listar_formula, crear_formula } from "../models/formula_model.js"; 

export const listarFormula = async(req,res) => {
    try {
        const formula = await listar_formula();
        res.json(201).json(formula);
    }catch(error){
        res.status(500).json({message: error.message});
    }

};

export const crearFormula = async(req,res) => {
   try{ 
        const nueva_formula = await crear_formula(req.body);
        res.json(201).json(nueva_formula);
   }catch(error) {
        res.status(500).json({message: error.message});
   }
}