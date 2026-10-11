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
    const {id_venta, id_producto, id_formula, cantidad, subtotal } = detalle;
    const resultado = await pool.query("INSERT INTO detalle_venta (id_venta, id_producto, id_formula, cantidad, subtotal) VALUES ($1, $2, $3, $4, $5) RETURNING *",[id_venta, id_producto, id_formula, cantidad, subtotal]);
    return resultado.rows[0];
};