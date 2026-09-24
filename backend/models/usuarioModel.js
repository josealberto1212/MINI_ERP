import pool from '../config/db.js';

export const getUsuarios = async () => {
    const resultado = await pool.query('SELECT * FROM usuario');
    return resultado.rows;
}

export const crearUsuario = async (user) => {
    const { usuario, rol } = user;
    const resultado = await pool.query('INSERT INTO usuario (usuario, rol) VALUES ($1, $2) RETURNING *', [usuario, rol]);
    return resultado.rows[0];
}