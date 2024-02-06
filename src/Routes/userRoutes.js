const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router.get("/", userController.getUserInfo);

module.exports = router;
