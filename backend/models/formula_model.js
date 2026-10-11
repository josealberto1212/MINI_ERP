import pool from "../config/db.js";

export const listar_formula = async() => {
    const resultado = await pool.query(`SELECT formula_color.id_formula, formula_color.id_base, 
        formula_color.id_cliente, formula_color.codigo_color, base_pintura.codigo as base_codigo, base_pintura.tipo as base_tipo,
        cliente.nombre as nombre_cliente
        FROM formula_color
        JOIN base_pintura ON formula_color.id_base = base_pintura.id_base
        LEFT JOIN cliente ON formula_color.id_cliente = cliente.id_cliente`);
        return resultado.rows;
};

export const crear_formula = async(formula) => {
    const {id_base, id_cliente, codigo_color } = formula;
    const resultado = await pool.query("INSERT INTO formula_color (id_base, id_cliente, codigo_color) VALUES ($1, $2, $3) RETURNING *",[id_base, id_cliente, codigo_color]);
    return resultado.rows[0];
};