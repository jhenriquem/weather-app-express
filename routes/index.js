const express = require("express");
const Weather = require("../src/queryAPI.js");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", {
    cityName: "",
    Icon: `fa-solid fa-cloud-sun`,
    temperature: "",
    description: "",
    windSpeed: "",
    humidity: "",
  });
});

router.post("/", Weather.query);

module.exports = router;
