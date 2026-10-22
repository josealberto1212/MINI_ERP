import { login } from "../models/login_model.js";

export const listarLogin =  async (req, res) => {
   try{
        const lista_login = await login();
        res.json(lista_login);
   } catch (error) {
        res.status(400).json({message: error.Message});
   }
 }

export const login_controller = async (req, res) => {
    try {
        const token = await login(req.body);
        res.status(201).json(token);
    } catch (error) {
        console.error('Error in login_controller:', error);
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
};