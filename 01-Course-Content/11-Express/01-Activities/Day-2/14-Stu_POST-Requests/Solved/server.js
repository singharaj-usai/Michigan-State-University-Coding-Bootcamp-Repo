const express = require('express');

const PORT = 3001;

const app = express();

// GET request for reviews
app.get('/api/reviews', (req, res) => {
  // Inform the client
  res.send(`${req.method} request received to get reviews`);

  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);
});

// POST request for reviews
app.post('/api/reviews', (req, res) => {
  // Inform the client that their POST request was received
  res.json(`${req.method} request received to add a review`);

  // Log our request to the terminal
  console.info(`${req.method} request received to add a review`);
});

// GET request for upvotes
app.get('/api/upvotes', (req, res) => {
  // Inform the client
  res.json(`${req.method} request received to retrieve upvote count`);

  // Log our request to the terminal
  console.info(`${req.method} request received to retrieve upvote count`);
});

// POST request
app.post('/api/upvotes', (req, res) => {
  // Inform the client that their POST request was received
  res.json(`${req.method} request received to upvote`);

  // Log our request to the terminal
  console.info(`${req.method} request received to upvote`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
