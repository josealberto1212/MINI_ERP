import pool from "../config/db.js";

export const lista_colorante = async() => {
    const resultado = await pool.query("SELECT * FROM colorante");
    return resultado.rows;

}

export const crear_colorante = async(colorante) => {
    const{codigo, existencia_oz} = colorante;
    const resultado = await pool.query("INSERT INTO colorante (codigo, existencia_oz) VALUES ($1, $2) RETURNING *", [codigo,existencia_oz]);
    return resultado.rows[0];
}