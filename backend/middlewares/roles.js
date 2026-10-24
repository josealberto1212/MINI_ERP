export const validarRole = (...rolesPermitidos) =>{ 
    return (req, res, next) => {
        if(!req.user){
            return res.status(401).json({message:'No tiene acceso'});
        }
        if (!rolesPermitidos.includes(req.user.rol)){
            return res.status(403).json({message: 'Acceso denegado'});
        }
        next();
    };
    
};