const express = require('express');
const app = express();
const PORT = 3001;
const path = require('path');

// Creates individual routes for every static asset
// Note: Not good practice - Very painstaking

app.get('/', (req, res) => res.send('Static assets!'));

// Serve the home page
app.get('/home', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Serve the cat image
app.get('/image', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/images/cat.jpg'))
);

// Serve the CSS file
app.get('/css', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/styles/jass.css'))
);

app.listen(PORT, () =>
  console.log(`serving all static files from public on port ${PORT}!`)
);
