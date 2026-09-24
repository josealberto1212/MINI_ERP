import pool from '../config/db.js';

//consulta de todos los proveedores
export const getProveedores = async () => {
    const resultado = await pool.query('SELECT * FROM proveedor');
    return resultado.rows;
};

//crear un nuevo proveedor
export const crearProveedor = async (proveedor) => {
    const { rnc, nombre } = proveedor;
    const resultado = await pool.query('INSERT INTO proveedor (rnc, nombre) VALUES ($1, $2) RETURNING *', [rnc, nombre]);
    return resultado.rows[0];
};