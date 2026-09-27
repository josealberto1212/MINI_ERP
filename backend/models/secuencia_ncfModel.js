import pool from '../config/db.js';

export const getSecuenciaNCF = async () => {
    const resultado = await pool.query (`SELECT secuencia_ncf.id_tipo_ncf, secuencia_ncf.secuencia_actual, secuencia_ncf.fecha_vencimiento,
        tipo_ncf.codigo_tipo AS tipo_ncf_codigo
         FROM secuencia_ncf
         JOIN tipo_ncf ON secuencia_ncf.id_tipo_ncf = tipo_ncf.id_tipo_ncf`);
    return resultado.rows;
}

export const crearSecuenciaNCF = async (secuencia_ncf) => {
    const { secuencia_actual, fecha_vencimiento, id_tipo_ncf } = secuencia_ncf;
    const resultado = await pool.query('INSERT INTO secuencia_ncf (secuencia_actual, fecha_vencimiento, id_tipo_ncf) VALUES ($1, $2, $3) RETURNING *', [secuencia_actual, fecha_vencimiento, id_tipo_ncf]);
    return resultado.rows[0];
}