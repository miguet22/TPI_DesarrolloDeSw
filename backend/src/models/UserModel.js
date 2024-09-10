const pool = require('../config/db');

class UserModel {
    // Crear un nuevo user
    static async createUser({ nombre, email, password, role }) {
        const [result] = await pool.query(
            'INSERT INTO usuarios (nombre, email, password, role) VALUES (?, ?, ?, ?)',
            [nombre, email, password, role]
        );
        return { id: result.insertId, nombre, email, password, role };
    }

    // Obtener todos los user
    static async getAllUsers() {
        const [rows] = await pool.query('SELECT * FROM usuarios');
        return rows;
    }

    // Obtener user por ID
    static async getUserById(id) {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        if (rows.length === 0) {
            return null;
        }
        return rows[0];
    }

    // Actualizar user por ID
    static async updateUser(id, { nombre, email, password, role }) {
        const [result] = await pool.query(
            'UPDATE eventos SET nombre = ?, email = ?, password = ?, role = ? WHERE id = ?',
            [nombre, email, password, role, id]
        );
        return result.affectedRows > 0;
    }

    // Eliminar user por ID
    static async deleteUser(id) {
        const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = UserModel;
