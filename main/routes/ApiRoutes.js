const express = require("express");
const { readFile, writeFile } = require("fs/promises");
const db = require("../db/db.json");

const router = express.Router();

router.get("/notes", async function (req, res) {
  try {
    const data = await readFile("./db/db.json");
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/notes", async function (req, res) {
  try {
    const { title, text } = req.body;
    const data = await readFile("./db/db.json");
    const dbNotes = JSON.parse(data);
    if (req.body) {
      const addNote = {
        title: title,
        text: text,
        id: Math.floor(Math.random() * 1000),
      };
      dbNotes.unshift(addNote);
      const stringData = JSON.stringify(dbNotes);
      await writeFile("./db/db.json", stringData);
    }
    res.status(200).send();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/notes/:id", async function (req, res) {
  try {
    const noteId = req.params.id;
    const data = await readFile("./db/db.json");
    const dbNotes = JSON.parse(data);
    for (let i = 0; i < dbNotes.length; i++) {
      if (dbNotes[i].id === Number(noteId)) {
        dbNotes.splice(i, 1);
      }
    }
    const stringData = JSON.stringify(dbNotes);
    await writeFile("./db/db.json", stringData);
    res.status(200).send();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
