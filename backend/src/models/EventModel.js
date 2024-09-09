const pool = require('../config/db');

class EventModel {
    static async createEvent({ nombre, fecha, lugar, descripcion, tematica }) {
        const [result] = await pool.query(
            'INSERT INTO eventos (nombre, fecha, lugar, descripcion, tematica) VALUES (?, ?, ?, ?, ?)', 
            [nombre, fecha, lugar, descripcion, tematica]
        );
        return result.insertId;
    }

    static async getAllEvents() {
        const [rows] = await pool.query('SELECT * FROM eventos');
        return rows;
    }

    static async getEventById(id) {
        const [rows] = await pool.query('SELECT * FROM eventos WHERE id = ?', [id]);
        return rows.length > 0 ? rows[0] : null;
    }

    static async updateEvent(id, { nombre, fecha, lugar, descripcion, tematica }) {
        const [result] = await pool.query(
            'UPDATE eventos SET nombre = ?, fecha = ?, lugar = ?, descripcion = ?, tematica = ? WHERE id = ?', 
            [nombre, fecha, lugar, descripcion, tematica, id]
        );
        return result.affectedRows > 0;
    }

    static async deleteEvent(id) {
        const [result] = await pool.query('DELETE FROM eventos WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = EventModel;
