import pool from '../config/db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const DUMMY_hash = bcrypt.hashSync('dummy_password', 10); // Hash for a dummy password

export const login = async (user) => {
    
    const {usuario, password} = user;

    if (typeof usuario !== 'string' || typeof password !== 'string' || !usuario || !password) {
        throw new Error('Usuario y contraseña deben ser cadenas de texto');
    }
    // Conectar a la base de datos y buscar el usuario
    const resultado = await pool.query('SELECT id_usuario, usuario, rol, password_hash FROM usuario WHERE usuario = $1', [usuario]);
    const userRow = resultado.rows[0];

        // se crea la variable userRow para almacenar el resultado de la consulta y se compara la contraseña enviada con la contraseña almacenada en la base de datos usando bcrypt.compare
    const hash =  userRow?.password_hash ?? DUMMY_hash;
    const isMatch = await bcrypt.compare(password, hash);
        
        // si la contraseña no coincide, lanzar error
    if ( !userRow || !userRow.password_hash || !isMatch) {
        throw new Error('Credenciales invalidas');
    }

        // Generar token JWT, se crea el token con un tiempo de expiración de 1 hora
    return jwt.sign(
      { id: userRow.id_usuario, usuario: userRow.usuario, rol: userRow.rol },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
};