const fs = require("fs");
const chalk = require("chalk");

function getNotes() {
  return "Your notes...";
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title already taken!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter( (note) => note.title !== title);
  // My code
  // if (
  //   Object.keys(notes.filter((note) => note.title === title)).length === 0
  // ) {
  //   console.log(chalk.red("No note found!"));
  // } else {
  //   console.log(chalk.green("Note removed!"));
  // }
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bold.magenta("YOUR NOTES:"));
  notes.forEach((note) => console.log(chalk.blue(note.title))); 
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
};
