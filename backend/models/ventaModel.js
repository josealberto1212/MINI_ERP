import pool from '../config/db.js';

//consulta de todas las ventas
export const getVentas = async () => {
    const resultado = await pool.query(`SELECT venta.id_venta, venta.ncf, venta.es_credito, venta.fecha, venta.subtotal, venta.itbis, venta.total,
        cliente.nombre AS cliente_nombre,
        usuario.usuario AS usuario_nombre,
        tipo_ncf.codigo_tipo AS tipo_ncf_codigo
        FROM venta
        JOIN cliente ON venta.id_cliente = cliente.id_cliente
        JOIN usuario ON venta.id_usuario = usuario.id_usuario
        JOIN tipo_ncf ON venta.id_tipo_ncf = tipo_ncf.id_tipo_ncf`);
    return resultado.rows;
}  

//crear una nueva venta
export const crearVenta = async (venta) => {
    const { ncf, es_credito, subtotal, itbis, total, id_cliente, id_usuario, id_tipo_ncf } = venta;
    const resultado = await pool.query(
        'INSERT INTO venta (ncf, es_credito, subtotal, itbis, total, id_cliente, id_usuario, id_tipo_ncf) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [ncf, es_credito, subtotal, itbis, total, id_cliente, id_usuario, id_tipo_ncf]
    );
    return resultado.rows[0];
};