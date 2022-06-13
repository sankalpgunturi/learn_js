const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const inputLocation = process.argv[2];
if (!inputLocation) {
  console.log("Please provide an address.");
} else {
  geoCode(inputLocation, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log("Error: ", error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log("Error: ", error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}

// Reverse Geocoding
// const myLocationgeoCodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/80.51614672576935,16.37683391522833.json?access_token=pk.eyJ1Ijoic295ZGl2ZXRydSIsImEiOiJjbDN2cmZtNjUwMGplM2lsYWQ1NHZ4OWV6In0.00LVf3MMYjdtL-4IdHO09w&limit=1";

// request({ url: myLocationgeoCodeURL, json: true }, (error, response) => {
//   console.log(
//     `Place: ${response.body.features[0].place_name}. Category: ${response.body.features[0].properties.category}.`
//   );
// });
