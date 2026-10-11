import pool from '../config/db.js';

export const listar_base = async () => {
    const resultado = await pool.query(`SELECT * FROM base_pintura`);
    return resultado.rows;
}

export const crear_base = async(base) => {
    const {codigo, tipo} = base;
    const resultado = await pool.query("INSERT INTO base_pintura  (codigo, tipo) VALUES ($1, $2) RETURNING *",[codigo,tipo]);
    return resultado.rows[0];
}