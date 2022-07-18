const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById("62d409ab967d3f16900052da");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);

  const user = await User.findById("62d4f463f9f2c91d85398951");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main();
