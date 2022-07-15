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

    db.collection("tasks").findOne(
      { _id: new ObjectId("62d12a671eeb7e73e01c23ec") },
      (error, task) => {
        if (error) {
          console.log("unable to fetch");
        }

        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          console.log("unable to fetch");
        }

        console.log(tasks);
      });

    // db.collection("users")
    //   .find({ name: "Unie" })
    //   .count((error, count) => {
    //     if (error) {
    //       console.log("unable to fetch");
    //     }

    //     console.log(count);
    //   });
  }
);
