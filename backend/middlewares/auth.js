import jwt from 'jsonwebtoken';

export const verificarToken = (req, res, next) => {
    const header = req.headers.authorization;

    /* se verifica si el token en el header
    empieza con Bearer, si no es asi se rotorna hacia 
    atras no dejando pasar a quien intenta entrar
    */
    if (!header || !header.startsWith('Bearer ')) {
       return res.status(401).json({message: 'No Autorizado'});       
    }
    
    // se separa el header del token 
    const token = header.split(' ')[1];


    let payload;

    // se verifica si el token es correcto, si es asi se deja pasar hacia el controlador, si no se retorna y encia el mensaje de autorizacion
    try {
        payload = jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] });
    
    } catch (error){
        return res.status(401).json({message: 'No Autorizado'});
    }

    req.user = payload
    next();
    
}