const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing note!");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List out all notes",
  handler: function () {
    console.log("Listing notes!");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function () {
    console.log("Reading note!");
  },
});

console.log(yargs.argv);
