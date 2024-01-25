const noteRepository = require("../Repository/noteRepository");

async function getNotes(user_id) {
  const notes = await noteRepository.getNotes(user_id);

  const formattedNotes = notes.map((note) => {
    return {
      id: note.dataValues.id,
      title: note.dataValues.title,
      content: note.dataValues.content,
      user_id: note.dataValues.user_id,
      color_id: note.dataValues.color_id,
    };
  });

  return formattedNotes;
}

async function addNote(user_id, note) {
  const createdNote = await noteRepository.addNote(user_id, note);
  return createdNote;
}

async function updateNote(note) {
  const response = await noteRepository.updateNote(note);
  return response;
}

async function deleteNote(note_id) {
  const response = await noteRepository.deleteNote(note_id);
  return response;
}

module.exports = { getNotes, addNote, updateNote, deleteNote };
