const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=c16ee58d8ff8ddd569939cc10a544aa8&query=16.37683391522833,80.51614672576935&units=m";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to the weather service!");
  } else if (response.body.error) {
    console.log(response.body.error.info);
  } else {
    console.log(
      `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out`
    );
  }
});

// Geocoding
// Address -> Lat/Long -> Weather

// Geocoding
const geoCodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Namburu%20Andhra%20Pradesh.json?access_token=pk.eyJ1Ijoic295ZGl2ZXRydSIsImEiOiJjbDN2cmZtNjUwMGplM2lsYWQ1NHZ4OWV6In0.00LVf3MMYjdtL-4IdHO09w&limit=1";

request({ url: geoCodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to the weather service!");
  } else if (!response.body.features.length) {
    console.log("Unable to find the location, please try again!");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(
      `Place: ${response.body.features[0].place_name}. Latitude: ${latitude} and Longitude: ${longitude}.`
    );
  }
});

// Reverse Geocoding
const myLocationgeoCodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/80.51614672576935,16.37683391522833.json?access_token=pk.eyJ1Ijoic295ZGl2ZXRydSIsImEiOiJjbDN2cmZtNjUwMGplM2lsYWQ1NHZ4OWV6In0.00LVf3MMYjdtL-4IdHO09w&limit=1";

request({ url: myLocationgeoCodeURL, json: true }, (error, response) => {
  console.log(
    `Place: ${response.body.features[0].place_name}. Category: ${response.body.features[0].properties.category}.`
  );
});
