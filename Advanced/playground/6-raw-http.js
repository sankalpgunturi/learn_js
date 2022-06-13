const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=c1e0895192f393dd8ed99ecf508c255a&query=45,-75&units=f";

const request = http.request(url, (reponse) => {
  let data = "";
  reponse.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  reponse.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error");
});
request.end();
