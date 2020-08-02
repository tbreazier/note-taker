//Variables
const router = require('express').Router();
const path = require('path');
const shortid = require('shortid');
const { createNote } = require('../../lib/notes')
let notesArray = require('../../db/db.json');

//Route to DB
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'))
});

//Write to DB
router.post('/', (req, res) => {
    req.body.id = shortid.generate()
    const note = createNote(req.body)
    res.json(note)
});

module.exports = router;

