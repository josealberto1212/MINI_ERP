import {listar_base, crear_base as crear_base_model} from "../models/base_pintura_model.js";

export const listarBase = async(req, res) => {
    try {
        const base = await listar_base();
        res.json(base);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const crearBase = async(req, res) =>{
    try{
        const nueva_base = await crear_base_model(req.body);
        res.status(201).json(nueva_base);
    }catch (error){
        res.status(500).json({message: error.message});
    }
};