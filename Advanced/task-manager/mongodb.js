// CRUD creates read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId;

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
console.log(id.id.length);
console.log(id.toHexString().length);

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
        _id: id,
        name: "Vikram",
        age: 69,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user!");
        }

        console.log(result.insertedId);
      }
    );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28,
    //     },
    //     {
    //       name: "Gunther",
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents!");
    //     }

    //     console.log(result.insertedId);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "To buy clothes",
    //       completed: true,
    //     },
    //     {
    //       description: "To check out laundry",
    //       completed: false,
    //     },
    //     {
    //       description: "To go to the gym",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents!");
    //     }
    //   }
    // );
  }
);
