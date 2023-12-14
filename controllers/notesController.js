const { pool } = require("../config/dbconfig.js");

async function getNotes() {
  try {
    const res = await pool.query("SELECT * FROM ejemplo");
    return res.rows;
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    return [];
  }
}

module.exports = { getNotes };
