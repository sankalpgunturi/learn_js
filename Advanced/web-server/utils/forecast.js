const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=c1e0895192f393dd8ed99ecf508c255a&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "&units=m";
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to the weather service!", undefined);
    } else if (body.success === false) {
      callback(`${body.error.code}: ${body.error.info}`, undefined);
    } else {
      callback(
        undefined,
        `It is ${body.current.weather_descriptions[0]} with a temperature of ${body.current.temperature} degrees celsius, and it feels like ${body.current.feelslike} degrees celsius. The humidity is ${body.current.humidity}%.`
      );
    }
  });
};

module.exports = forecast;
