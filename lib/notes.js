const fs = require("fs");
const path = require("path");
let notesArray = require('../db/db.json');

function createNote(note) {
    notesArray.push(note);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesArray, null, 2)
    );
    return notes;
}

module.exports = {
    createNote
}