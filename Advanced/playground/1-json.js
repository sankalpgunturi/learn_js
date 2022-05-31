const fs = require("fs");
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Sankalp";
data.age = 24;

const details = JSON.stringify(data);
fs.writeFileSync("1-json.json", details);
