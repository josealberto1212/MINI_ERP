import pool from '../config/db.js';
import { recalcular_venta, crear_detalle_venta } from './detalle_venta_model.js';

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
    const { ncf, es_credito, id_cliente, id_usuario, id_tipo_ncf, items } = venta;

    if (!Array.isArray(items) || items.length === 0) {
        throw new Error('La venta debe incluir al menos un item');
    }
 
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
          
         const resultado = await client.query(
        'INSERT INTO venta (ncf, es_credito, id_cliente, id_usuario, id_tipo_ncf) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [ncf, es_credito, id_cliente, id_usuario, id_tipo_ncf]
    );
    const nuevaVenta = resultado.rows[0];

    // Si la venta es a crédito, se crea un registro en la tabla venta_credito
    if (nuevaVenta.es_credito) {
        await client.query(
            "INSERT INTO venta_credito (id_venta, saldo_pendiente, estado) VALUES ($1, 0, 'Pendiente')",
            [nuevaVenta.id_venta]
        );
    }
    const detalles = [];
    for (const item of items) {
        detalles.push(await crear_detalle_venta(client, nuevaVenta.id_venta, item));
    }
    await recalcular_venta(client, nuevaVenta.id_venta);

    const final = await client.query(`SELECT * FROM venta WHERE id_venta = $1`, [nuevaVenta.id_venta]);

    await client.query('COMMIT');
    return {...final.rows[0], detalles };
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    }finally {
        client.release();
    }
};