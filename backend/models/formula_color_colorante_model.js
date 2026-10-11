import pool from '../config/db.js';

// Función para listar las formulas de color y colorantes
export const listar_formula_color_colorante = async () => {
    const formula_color_colorante = await pool.query(`SELECT formula_color_colorante.id_formula, formula_color_colorante.id_colorante,
         formula_color_colorante.cantidad_onz, colorante.codigo AS codigo_colorante, formula_color.codigo_color AS nombre_formula
         FROM formula_color_colorante
         JOIN colorante ON formula_color_colorante.id_colorante = colorante.id_colorante
         JOIN formula_color ON formula_color_colorante.id_formula = formula_color.id_formula`);
    return formula_color_colorante.rows;
}

export const crear_formula_color_colorante = async (formula_color_colorante) => {
    const { id_formula, id_colorante, cantidad_onz } = formula_color_colorante;
    const nuevo_formula_color_colorante = await pool.query(
        'INSERT INTO formula_color_colorante (id_formula, id_colorante, cantidad_onz) VALUES ($1, $2, $3) RETURNING *',[id_formula, id_colorante, cantidad_onz]
    );
    return nuevo_formula_color_colorante.rows[0];
}
