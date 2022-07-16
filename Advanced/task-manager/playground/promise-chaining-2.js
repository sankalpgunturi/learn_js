require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("62d285cd73425f60a909015a")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  return await Task.countDocuments({ completed: false });
};

deleteTaskAndCount("62d2b2579fb8e115dc92dab3")
  .then((result) => {
    console.log("Number of tasks which are still incomplete: " + result);
  })
  .catch((e) => console.log(e));
