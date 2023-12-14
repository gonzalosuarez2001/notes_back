const { pool } = require("../config/dbconfig.js");

async function getNotes(user_id) {
  try {
    const res = await pool.query(`SELECT * FROM notes WHERE user_id = ${user_id}`);
    return res.rows;
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    return [];
  }
}

module.exports = { getNotes };
