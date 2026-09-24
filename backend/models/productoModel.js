import pool from '../config/db.js';

//consulta de todos los productos
export const getProductos = async () => {
    const resultado = await pool.query('SELECT producto.id_producto, producto.codigo, producto.nombre,producto.existencia, producto.precio, categoria.nombre AS categoria_nombre FROM producto JOIN categoria ON producto.id_categoria = categoria.id_categoria');
    return resultado.rows;
};

//crear un nuevo producto
export const crearProducto = async (producto) => {
    const { codigo, nombre, existencia, precio, id_categoria } = producto;
    const resultado = await pool.query('INSERT INTO producto (codigo, nombre, existencia, precio, id_categoria) VALUES ($1, $2, $3, $4, $5) RETURNING *', [codigo, nombre, existencia, precio, id_categoria]);
    return resultado.rows[0];
};
