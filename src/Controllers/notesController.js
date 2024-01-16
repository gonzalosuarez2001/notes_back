const noteModel = require("../Models/noteModel");

async function getNotes(user_id) {
  try {
    const notes = await noteModel.findAll({
      where: {
        user_id: user_id,
      },
    });

    const formattedNotes = notes.map((note) => {
      return {
        id: note.dataValues.id,
        title: note.dataValues.title,
        content: note.dataValues.content,
        user_id: note.dataValues.user_id,
        color_id: note.dataValues.color_id,
      };
    });

    console.log(formattedNotes);
    return formattedNotes;
  } catch (error) {
    console.error("Error al obtener notas:", error);
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
