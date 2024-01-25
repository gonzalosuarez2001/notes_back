const express = require("express");
const router = express.Router();
const noteController = require("../Controllers/noteController");

router.get("/", async (req, res) => {
  const user_id = req.userId;
  const notes = await noteController.getNotes(user_id);
  res.send(notes);
});

router.post("/", async (req, res) => {
  const createdNote = await noteController.addNote(req.userId, req.body.note);
  res.send(createdNote);
});

router.patch("/", async (req, res) => {
  const response = await noteController.updateNote(req.body.note);
  res.send({ response });
});

router.delete("/", async (req, res) => {
  const response = await noteController.deleteNote(req.body.id);
  res.send({ response });
});

module.exports = router;
