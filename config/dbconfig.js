const { Pool } = require("pg");

// Configuracion de la conexión a la base de datos en ElephantSQL
const pool = new Pool({
  user: "gudunwmf",
  host: "drona.db.elephantsql.com",
  database: "gudunwmf",
  password: "7WKJspqlOfVsHSZ62Jo-dXpIXVnwNr5F",
  port: 5432,
  ssl: true,
});

module.exports = { pool };

