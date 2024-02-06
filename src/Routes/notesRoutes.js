const express = require("express");
const router = express.Router();
const noteController = require("../Controllers/noteController");

router.get("/", noteController.getNotes);

router.post("/", noteController.addNote);

router.patch("/", noteController.updateNote);

router.delete("/", noteController.deleteNote);

module.exports = router;
