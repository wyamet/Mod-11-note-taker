const express = require('express');
const router = express.Router();

const notesPath = path.join(__dirname, '../../public/notes.html');
const indexPath = path.join(__dirname, '../../public/index.html');

router.get('/notes', (req, res) => {
    res.sendFile(notesPath);
});

router.get('*', (req, res) => {
    res.sendFile(indexPath);
});

module.exports = router;
