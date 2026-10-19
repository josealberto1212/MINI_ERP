import pool from "../config/db.js";

export const listar_detalle_venta = async() => {
    const resultado = await pool.query(`SELECT detalle_venta.id_detalle, detalle_venta.id_venta, 
        detalle_venta.id_producto, detalle_venta.id_formula, detalle_venta.cantidad,
         detalle_venta.subtotal, producto.nombre as nombre_producto, producto.codigo as codigo_producto,
         formula_color.codigo_color as codigo_formula, formula_color.precio as precio_formula, 
         venta.fecha as fecha_venta, venta.total as total_venta
          FROM detalle_venta
          LEFT JOIN producto ON detalle_venta.id_producto = producto.id_producto
          LEFT JOIN formula_color ON detalle_venta.id_formula = formula_color.id_formula
          LEFT JOIN venta ON detalle_venta.id_venta = venta.id_venta`);
    return resultado.rows;
};

export const crear_detalle_venta = async(detalle) => {
    const {id_venta, id_producto, id_formula, cantidad } = detalle;
    if ((id_producto && id_formula)||(!id_producto && !id_formula)) {
        throw new Error('Debes enviar id_producto o id_formula, pero no ambos');
    }

    if(!(Number(cantidad) > 0)) {
        throw new Error('La cantidad debe ser mayor a 0');
    }

    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const consulta = id_producto
            ? await pool.query("SELECT precio FROM producto WHERE id_producto = $1", [id_producto])
            : await pool.query("SELECT precio FROM formula_color WHERE id_formula = $1", [id_formula]);

        if (consulta.rows.length === 0) {
            throw new Error('El producto o fórmula no existe');
        }

        const precio = Number(consulta.rows[0].precio);
        const subtotal = Math.round(Number(cantidad) * precio * 100) / 100;

        if (!Number.isFinite(subtotal)) {
        throw new Error('No se pudo calcular el subtotal');
        }

        const resultado = await pool.query("INSERT INTO detalle_venta (id_venta, id_producto, id_formula, cantidad, subtotal) VALUES ($1, $2, $3, $4, $5) RETURNING *",[id_venta, id_producto, id_formula, cantidad, subtotal]);
        return resultado.rows[0];

        // sumar el subtotal al total de la venta
            await client.query(
                `UPDATE venta
                SET subtotal = s.sub,
                    itbis = ROUND(s.sub * 0.18, 2),
                    total = s.sub + ROUND(s.sub * 0.18, 2)
                FROM (SELECT COALESCE(SUM(subtotal), 0) AS sub
                    FROM detalle_venta WHERE id_venta = $1) s
                WHERE venta.id_venta = $1`,
                [id_venta]
            );

        await client.query('COMMIT');
        return resultado.rows[0];
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
};