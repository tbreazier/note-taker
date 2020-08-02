const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const notes = require('./db/db')

app.get('/api/notes', (req, res) => {
    res.send(notes);
});

app.post('/api/notes', (req, res) => {
    res.json(req.body);
});

function createNewNote(body, notesArray) {
    console.log(body);

    return body;
}

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});