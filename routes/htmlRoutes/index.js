//Variables
const path = require("path");
const router = require("express").Router();

//Returns Homepage
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

//Returns Notes Page
  router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;