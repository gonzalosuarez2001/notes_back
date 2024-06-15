const noteModel = require("../Models/noteModel");

async function getNotes(user_id) {
  try {
    const notes = await noteModel.findAll({
      where: {
        userId: user_id,
      },
      order: [["id", "ASC"]],
    });
    return notes;
  } catch (error) {
    console.error("Error al obtener notas:", error);
  }
}

async function addNote(user_id, note) {
  try {
    const newNote = {
      title: note.title,
      content: note.content,
      userId: user_id,
    };
    const createdNote = await noteModel.create(newNote);
    return createdNote;
  } catch (error) {
    console.error("Error al crear nota:", error);
  }
}

async function updateNote(note) {
  try {
    const response = await noteModel.update(
      {
        title: note.title,
        content: note.content,
      },
      {
        where: {
          id: note.id,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error al actualizar nota:", error);
  }
}

async function deleteNote(note_id) {
  try {
    const response = await noteModel.destroy({
      where: {
        id: note_id,
      },
    });
    return response;
  } catch (error) {
    console.error("Error al eliminar nota:", error);
  }
}

module.exports = { getNotes, addNote, updateNote, deleteNote };
