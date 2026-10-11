import {lista_colorante, crear_colorante} from "../models/colorante_model.js";

export const listarColorante =  async(req, res) => {
    try{
        const colorante = await lista_colorante();
        res.json(201).json(colorante);
    }catch(error){
        res.json(500).json({message: error.message});
    }
};

// controlador para crear el colorante 
export const crearColorante = async(req, res) => {
   try{
        const nuevo_color = await crear_colorante(req.body);
        res.json(201).json(nuevo_color);
   } catch(error){
        res.json(500).json({message: error.message});
   }
}