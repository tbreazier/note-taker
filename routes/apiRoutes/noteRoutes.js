const router = require('express').Router();
const path = require('path');
const shortid = require('shortid');
const { createNote } = require('../../lib/notes')
let notesArray = require('../../db/db.json');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'))
});

router.post('/', (req, res) => {
    req.body.id = shortid.generate()
    const createNote = createNote(req.body)
    res.json(note)
});

module.exports = router;

