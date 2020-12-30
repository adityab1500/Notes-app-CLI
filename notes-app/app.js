// const fs =  require('fs')
// fs.writeFileSync('notes.txt','This file was created by Node.js!')
// fs.appendFileSync('notes.txt', 'This file was appended with Node.js')

// const validator = require('validator')
// console.log(validator.isEmail('adityabhandari1500@gmail.com'))

// const getNotes = require('./notes.js')

const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// const msg = getNotes()
// console.log(msg)

// const msg = 'Error!'
// console.log(chalk.red.bold.inverse(msg))

// console.log(process.argv)
// console.log(yargs.argv)

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
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
