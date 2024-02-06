const noteRepository = require("../Repository/noteRepository");

async function getNotes(req, res) {
  const notes = await noteRepository.getNotes(req.userId);

  const formattedNotes = notes.map((note) => {
    return {
      id: note.dataValues.id,
      title: note.dataValues.title,
      content: note.dataValues.content,
      user_id: note.dataValues.user_id,
      color_id: note.dataValues.color_id,
    };
  });

  res.send(formattedNotes);
}

async function addNote(req, res) {
  const createdNote = await noteRepository.addNote(req.userId, req.body.note);
  res.send({
    msg: `La nota se creo correctamente, id: ${createdNote.dataValues.id}`,
  });
}

async function updateNote(req, res) {
  await noteRepository.updateNote(req.body.note);
  res.send({
    msg: `La nota con id ${req.body.note.id} se actualizo correctamente.`,
  });
}

async function deleteNote(req, res) {
  await noteRepository.deleteNote(req.body.id);
  res.send({ msg: `La nota con id ${req.body.id} se elimino correctamente` });
}

module.exports = { getNotes, addNote, updateNote, deleteNote };
