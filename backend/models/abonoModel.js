import pool from '../config/db.js';

export const listar_abono = async () =>  {
    const resultado = await  pool.query(`SELECT abono.id_abono, abono.id_venta, abono.fecha, abono.monto  
         FROM abono
         JOIN venta_credito ON abono.id_venta = venta_credito.id_venta
        `);
        return resultado.rows;
}

export const crear_abono = async (abono) => {
    const {id_venta , monto } = abono;

    // validaciones que no necesitan las base de datos
    if (!(id_venta)){
        throw new Error('Debes enviar id_venta');
    }
    if (!(Number(monto) > 0)) {
        throw new Error('El monto debe ser mayor a 0');
    }

    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const credito = await client.query(
            "SELECT saldo_pendiente FROM venta_credito WHERE id_venta = $1", [id_venta]
        );

        if (credito.rows.length === 0) {
            throw new Error('La venta no existe');
        }

        const saldo = Number(credito.rows[0].saldo_pendiente);
        if (Number(monto) > saldo) {
            throw new Error('El monto del abono no puede ser mayor al saldo pendiente');
        }

        const resultado = await client.query("INSERT INTO abono (id_venta, monto ) VALUES ($1 ,$2) RETURNING *", [id_venta,monto]);

         const actualizado = await pool.query(
            `UPDATE venta_credito
             SET saldo_pendiente = saldo_pendiente - $1::numeric,
                 estado = CASE WHEN saldo_pendiente - $1::numeric = 0 THEN 'pagada' ELSE estado END
             WHERE id_venta = $2
             RETURNING saldo_pendiente, estado`,
            [monto, id_venta]
        );
        await client.query('COMMIT');
        return { ...resultado.rows[0], ...actualizado.rows[0] };
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
}
