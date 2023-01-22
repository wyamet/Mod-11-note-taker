const express = require('express');
const app = express();
const port = 3001;

const fs = require('fs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to the Note Taker App!');
  });

  app.post('/notes', (req, res) => {
    // get the note data from the request body
    const newNote = req.body;
  
    // read the existing notes from the JSON file
    fs.readFile('notes.json', (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);
      notes.push(newNote);
  
      // write the updated notes to the JSON file
      fs.writeFile('notes.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        res.send('Note saved successfully!');
      });
    });
  });

  app.get('/notes', (req, res) => {
    fs.readFile('notes.json', (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);
      res.send(notes);
    });
  });

  app.listen(port, () => {
    console.log(`Note Taker app listening at http://localhost:${port}`);
  });