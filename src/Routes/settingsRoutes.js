const express = require("express");
const router = express.Router();
const settingsController = require("../Controllers/settingsController");

router.get("/colors", settingsController.getColorSettings);

router.get("/fonts", settingsController.getFontSettings);

router.get("/user", settingsController.getUserSettings);

router.patch("/user/color", settingsController.updateUserColor);

router.patch("/user/font", settingsController.updateUserFont);

module.exports = router;
