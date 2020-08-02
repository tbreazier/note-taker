//Variables
const fs = require("fs");
const path = require("path");
let notesArray = require('../db/db.json');

//Create Note Function
function createNote(note) {
    notesArray.push(note);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesArray, null, 2)
    );
    return note;
}

module.exports = {
    createNote
}