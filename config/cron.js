const cron = require("node-cron");
const noteModel = require("../src/Models/noteModel");
const userModel = require("../src/Models/userModel");
const settingsModel = require("../src/Models/settingsModel");

function cronStart() {
  cron.schedule(`*/15 * * * * *`, cleanDB);
}

async function cleanDB() {
  const notesDelete = await noteModel.destroy({ where: {} });
  const usersDelete = await userModel.destroy({ where: {} });
  const settingsDelete = await settingsModel.destroy({ where: {} });
  const date = new Date();
  const currentDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
  console.log(
    `Cron ejecutado con éxito: ${currentDate}\nNotas eliminadas: ${notesDelete}\nUsuarios eliminados: ${usersDelete}\nConfiguraciones eliminadas: ${settingsDelete}`
  );
}

module.exports = { start: cronStart };
