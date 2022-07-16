require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("62d285cd73425f60a909015a")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
