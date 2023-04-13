const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  const notesPath = path.join(__dirname, "../public/notes.html");
  res.sendFile(notesPath);
});

router.get("*", (req, res) => {
  const indexPath = path.join(__dirname, "../public/index.html");
  res.sendFile(indexPath);
});

module.exports = router;
