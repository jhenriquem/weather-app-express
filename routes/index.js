const express = require("express");
const {
  getController,
  postController,
} = require("../controller/indexController");
const router = express.Router();

router.get("/", getController);

router.post("/", postController);

module.exports = router;
