const pool = require('../config/db');

class EsculturaModel {
    // Crear una nueva escultura
    static async createEscultura({ nombre, descripcion, fecha_creacion, nombre_evento, nombre_escultor }) {
        const [result] = await pool.query(
            'INSERT INTO esculturas (nombre, descripcion, fecha_creacion, nombre_evento, nombre_escultor) VALUES (?, ?, ?, ?, ?)',
            [nombre, fecha, lugar, descripcion, tematica]
        );
        return { id_escultura: result.insertId, nombre, descripcion, fecha_creacion, nombre_evento, nombre_escultor };
    }

    // Obtener todas las esculturas
    static async getAllEsculturas() {
        const [rows] = await pool.query('SELECT * FROM esculturas');
        return rows;
    }

    // Obtener escultura por ID
    static async getEsculturaById(id_escultura) {
        const [rows] = await pool.query('SELECT * FROM esculturas WHERE id_escultura = ?', [id_escultura]);
        if (rows.length === 0) {
            return null;
        }
        return rows[0];
    }

    // Actualizar escultura por ID
    static async updateEscultura(id_escultura, { nombre, fecha, lugar, descripcion, tematica }) {
        const [result] = await pool.query(
            'UPDATE esculturas SET nombre = ?, descripcion = ?, fecha_creacion = ?, nombre_evento = ?, nombre_escultor = ? WHERE id_escultura = ?',
            [nombre, fecha, lugar, descripcion, tematica, id_escultura]
        );
        return result.affectedRows > 0;
    }

    // Eliminar escultura por ID
    static async deleteEscultura(id_escultura) {
        const [result] = await pool.query('DELETE FROM esculturas WHERE id_escultura = ?', [id_escultura]);
        return result.affectedRows > 0;
    }
}

module.exports = EsculturaModel;
