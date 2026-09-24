import pool from '../config/db.js';

//consultar clientes 
export const getClientes = async () => {
    const resultado = await pool.query('SELECT * FROM cliente');
    return resultado.rows;
}

//crear un nuevo cliente
export const crearCliente = async (cliente) => {
    const { cedula, nombre, telefono, limite_credito, rnc } = cliente;
    const resultado = await pool.query('INSERT INTO cliente (cedula, nombre, telefono, limite_credito, rnc) VALUES ($1, $2, $3, $4, $5) RETURNING *', [cedula, nombre, telefono, limite_credito, rnc]);
    return resultado.rows[0];
}
