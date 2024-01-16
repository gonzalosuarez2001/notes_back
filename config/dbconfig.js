const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("gudunwmf", "gudunwmf", "7WKJspqlOfVsHSZ62Jo-dXpIXVnwNr5F", {
  host: "drona.db.elephantsql.com",
  dialect: "postgres",
  logging: false,
});

sequelize.sync({ alter: true }).then(() => {
  console.log("Base de datos y tablas creadas");
});

module.exports = sequelize;
