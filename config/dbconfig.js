const { Sequelize } = require("sequelize");
const insertNoteColorsSeed = require("../seeds/insertNoteColors");
const insertNoteFontsSeed = require("../seeds/insertNoteFonts");

const databaseHost = process.env.DATABASE_HOST;
const databaseUser = process.env.DATABASE_USER;
const databasePassword = process.env.DATABASE_PASSWORD;
const sequelize = new Sequelize(databaseUser, databaseUser, databasePassword, {
  host: databaseHost,
  dialect: "postgres",
  logging: false,
});

sequelize.sync({ force: true }).then(async () => {
  console.log("Base de datos y tablas creadas");
  await insertNoteColorsSeed.up(sequelize.getQueryInterface());
  await insertNoteFontsSeed.up(sequelize.getQueryInterface());
});

module.exports = sequelize;
