const pool = require('../config/db');

class EscultorModel {
    // Crear un nuevo evento
    static async createEscultor({ nombre, biografia, contacto, obras_previas, imagen }) {
        const [result] = await pool.query(
            'INSERT INTO Escultores (nombre, biografia, contacto, obras_previas, imagen) VALUES (?, ?, ?, ?, ?)',
            [nombre, biografia, contacto, obras_previas, imagen]
        );
        return { id_escultor: result.insertId, nombre, biografia, contacto, obras_previas, imagen };
    }

    // Obtener todos los Escultores
    static async getAllEscultores() {
        const [rows] = await pool.query('SELECT * FROM Escultores');
        return rows;
    }

    // Obtener Escultoro por ID
    static async getEscultorById(id_escultor) {
        const [rows] = await pool.query('SELECT * FROM Escultores WHERE id = ?', [id_escultor]);
        if (rows.length === 0) {
            return null;
        }
        return rows[0];
    }

    // Actualizar Escultoro por ID
    static async updateEscultor(id_escultor, { nombre, biografia, contacto, obras_previas, imagen }) {
        const [result] = await pool.query(
            'UPDATE Escultores SET nombre = ?, biografia = ?, contacto = ?, obras_previas = ?, imagen = ? WHERE id_escultor = ?',
            [nombre, biografia, contacto, obras_previas, imagen, id_escultor]
        );
        return result.affectedRows > 0;
    }

    // Eliminar Escultoro por ID
    static async deleteEscultor(id_escultor) {
        const [result] = await pool.query('DELETE FROM escultor WHERE id_escultor = ?', [id_escultor]);
        return result.affectedRows > 0;
    }
}

module.exports = EscultorModel;
