const express = require('express');
const pulls = require('./db/repos.json');

const app = express();

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// Endpoint to return our own locally stored data
app.get('/api', (req, res) => res.json(pulls));

app.listen(3001, () => console.log('Express Server on port 3001!'));
