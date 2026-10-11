import pool from "../config/db.js";

export const lista_colorante = async() => {
    const resultado = await pool.query("SELECT * FROM colorante");
    return resultado.rows;

}

export const crear_colorante = async(colorante) => {
    const{codigo, existencia_onz} = colorante;
    const resultado = await pool.query("INSERT INTO colorante (codigo, existencia_onz) VALUES ($1, $2) RETURNING *", [codigo,existencia_onz]);
    return resultado.rows[0];
}