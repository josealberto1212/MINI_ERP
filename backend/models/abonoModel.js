import pool from '../config/db.js';

export const listar_abono = async () =>  {
    const resultado = await  pool.query(`SELECT abono.id_abono, abono.id_venta, abono.fecha, abono.monto, venta_credito.id_venta as idVenta
         FROM abono
         JOIN venta_credito ON abono.id_venta = venta_credito.id_venta
        `);
        return resultado.rows;
}

export const crear_abono = async (abono) => {
    const {id_venta , monto } = abono;
    const resultado = await pool.query("INSERT INTO abono (id_venta, monto ) VALUES ($1 ,$2) RETURNING *", [id_venta,monto]);
    return resultado.rows[0];
}