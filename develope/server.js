const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./Routes/notes');

const htmlRoutes = require('./Routs/index');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.use(express.json());


app.use('/api', 'Routes ');
app.use('/', 'Routes ');

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}. Welcome!`);
  });