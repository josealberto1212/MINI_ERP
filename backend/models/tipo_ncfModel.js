import pool from '../config/db.js';

//consulta de todos los tipos de NCF
export const getTiposNCF = async () => {
    const resultado = await pool.query('SELECT * FROM tipo_ncf');
    return resultado.rows;
}

//crear un nuevo tipo de NCF
export const crearTipoNCF = async (tipo_ncf) => {
    const { codigo_tipo, descripcion } = tipo_ncf;
    const resultado = await pool.query('INSERT INTO tipo_ncf (codigo_tipo, descripcion) VALUES ($1, $2) RETURNING *', [codigo_tipo, descripcion]);
    return resultado.rows[0];
}