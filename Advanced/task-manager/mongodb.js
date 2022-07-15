// CRUD creates read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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

    db.collection("users").insertOne(
      {
        name: "Unie",
        age: 24,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user!");
        }

        console.log(result.insertedId);
      }
    );
  }
);
