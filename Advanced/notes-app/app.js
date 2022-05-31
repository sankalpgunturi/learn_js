const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Content of the Note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(chalk.bold("Title") + `: ${argv.title}`);
    console.log(chalk.bold("Body:") + `${argv.body}`);
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
  describe: "List your notes",
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

yargs.parse();
