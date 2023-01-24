const express = require('express');
const router = express.Router();
const db = require('../../db/db');
const noteFunctions = require('../../lib/noteFunctions');

router.get('/notes', (req, res) => {
    res.json(db.notes);
});

router.post('/notes', (req, res) => {
    req.body.id = db.notes.length.toString();
    let note = noteFunctions.createNewNote(req.body, db.notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    noteFunctions.deleteNote(db.notes, req.params.id);
    res.json(db.notes);
});

module.exports = router;