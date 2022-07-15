// CRUD creates read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId;

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to Database");
    }

    const db = client.db(databaseName);

    db.collection("users")
      .deleteMany({
        age: 24,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    db.collection("tasks")
      .deleteOne({
        description: "To check out laundry",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
