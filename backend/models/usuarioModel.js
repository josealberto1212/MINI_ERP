import pool from '../config/db.js';
import bcrypt from 'bcrypt';

export const getUsuarios = async () => {
    const resultado = await pool.query('SELECT id_usuario, usuario, rol FROM usuario');
    return resultado.rows;
}

export const crearUsuario = async (user) => {
    const { usuario, rol, password } = user;
   
    // aseguarar contraseña con bcrypt y validaciones+
      if (!usuario || !rol) {
        throw new Error('Debes enviar usuario y rol');
    }
    if (typeof password !== 'string' || password.length < 8 || password.length > 72) {
        throw new Error('La contraseña debe tener entre 8 y 72 caracteres');
    }

    const password_hash = await bcrypt.hash(user.password, 10); // Hash the password before storing it

    const resultado = await pool.query('INSERT INTO usuario (usuario, rol, password_hash) VALUES ($1, $2, $3) RETURNING  id_usuario, usuario, rol', [usuario, rol, password_hash]);
    return resultado.rows[0];
}