const { pool } = require("../config/dbconfig.js");

async function getNotes(user_id) {
  try {
    const res = await pool.query(
      `SELECT * FROM notes WHERE user_id = ${user_id}`
    );
    return res.rows;
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    return [];
  }
}

async function addNote(user_id, content) {
  try {
    const res = await pool.query(
      `INSERT INTO notes (title, content, user_id, color_id) VALUES ($1,$2,$3,$4)`,
      ["titulo", content, user_id, "1"]
    );
    return res;
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    return [];
  }
}

async function deleteNote(note_id) {
  try {
    const res = await pool.query(`DELETE FROM notes WHERE id = ${note_id}`);
    return res;
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    return [];
  }
}

module.exports = { getNotes, addNote, deleteNote };
