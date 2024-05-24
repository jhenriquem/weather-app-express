import express from "express";
import Weather from "../src/queryAPI.js";
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

export default router;
