const settingsModel = require("../Models/settingsModel");
const noteColorModel = require("../Models/noteColorModel");
const noteFontModel = require("../Models/noteFontModel");

async function getUserSettings(user_id) {
  try {
    const settingsFound = await settingsModel.findOne({
      where: {
        userId: user_id,
      },
    });
    return settingsFound;
  } catch (error) {
    console.error("No se pudieron obtener las configuraciones:", error);
  }
}

async function updateUserColor(color_id, user_id) {
  try {
    const response = await settingsModel.update(
      {
        noteColorId: color_id,
      },
      {
        where: {
          userId: user_id,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(
      "No se pudo actualizar el color de las notas del usuario:",
      error
    );
  }
}

async function updateUserFont(font_id, user_id) {
  try {
    const response = await settingsModel.update(
      {
        noteFontId: font_id,
      },
      {
        where: {
          userId: user_id,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(
      "No se pudo actualizar la fuente de las notas del usuario:",
      error
    );
  }
}

module.exports = { getUserSettings, updateUserColor, updateUserFont };
