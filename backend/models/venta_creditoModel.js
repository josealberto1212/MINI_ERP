import pool  from '../config/db.js';

export const listarVentaCredito = async () => {
    const resultado = await pool.query(`SELECT  venta_credito.id_venta, venta_credito.saldo_pendiente, venta_credito.estado,
        venta.ncf, venta.total
        from venta_credito
        JOIN venta ON venta_credito.id_venta = venta.id_venta`);
    return resultado.rows;
};

export const crear_VentaCredito = async (ventaCredito) => {
    const { id_venta, saldo_pendiente, estado } = ventaCredito;
    const resultado = await pool.query(
        'INSERT INTO venta_credito (id_venta, saldo_pendiente, estado) VALUES ($1, $2, $3) RETURNING *',
        [id_venta, saldo_pendiente, estado]
    );
    return resultado.rows[0];
}