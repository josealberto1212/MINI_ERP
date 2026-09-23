import pool from '../config/db.js';

//consulta de todas las categorias
export const getCategorias = async () => {
    const resultado = await pool.query('SELECT * FROM categoria');
    return resultado.rows;
};

//crear una nueva categoria
export const crearCategoria = async (codigo, nombre) => {
    try {
        const inyeccion = await pool.query('INSERT INTO categoria (codigo,nombre) VALUES ($1, $2) RETURNING *', [codigo, nombre]);
        return inyeccion.rows[0];
    } catch (error) {
        throw new Error(error.message);
    }
};