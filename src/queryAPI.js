import axios from "axios";

export default class Weather {
  static async query(req, res, next) {
    const city = req.body.city;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.APIKEY}`;

    try {
      const response = await axios.get(apiURL);

      const data = {
        name: response.data.name,
        nameIcon: response.data.weather[0].main,
        temperature: Math.round(response.data.main.temp - 273.15), // Correção na conversão de Kelvin para Celsius
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      };

      const iconClass = {
        Clear: "fa-solid fa-sun",
        Rain: "fa-solid fa-cloud-showers-heavy",
        Snow: "fa-solid fa-cloud-snow",
        Clouds: "fa-solid fa-cloud",
        Haze: "fa-solid fa-smog",
      };

      res.render("index", {
        cityName: data.name,
        Icon: iconClass[data.nameIcon] || "fa-solid fa-cloud-sun",
        description: data.description,
        temperature: `${data.temperature}°C`,
        humidity: `${data.humidity}%`,
        windSpeed: `${data.wind} m/s`,
      });
    } catch (err) {
      console.error(err);
      res.render("index", {
        cityName: "Erro",
        Icon: "fa-solid fa-exclamation-triangle",
        description: "City not found",
        temperature: "",
        humidity: "",
        windSpeed: "",
      });
    }
  }
}
