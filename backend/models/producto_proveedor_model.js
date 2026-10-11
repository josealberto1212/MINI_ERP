import pool from '../config/db.js';

// Función para listar los productos con su proveedor
export const listar_producto_proveedor = async () => {
        const resultado = await pool.query(`
            SELECT producto_proveedor.id_producto, producto_proveedor.id_proveedor, producto.nombre as nombre_producto, producto.codigo as codigo_producto, 
            producto.precio as precio_producto, producto.existencia as existencia_producto, proveedor.nombre as nombre_proveedor,
            proveedor.rnc as rnc_proveedor
            FROM producto_proveedor
            JOIN proveedor ON producto_proveedor.id_proveedor = proveedor.id_proveedor
            JOIN producto ON producto_proveedor.id_producto = producto.id_producto
        `);
        return resultado.rows;
};

export const crear_producto_proveedor = async (producto_proveedor) => {
    const { id_producto, id_proveedor } = producto_proveedor;
    const resultado = await pool.query(
        'INSERT INTO producto_proveedor (id_producto, id_proveedor) VALUES ($1, $2) RETURNING *',
        [id_producto, id_proveedor]
    );
    return resultado.rows[0];
};