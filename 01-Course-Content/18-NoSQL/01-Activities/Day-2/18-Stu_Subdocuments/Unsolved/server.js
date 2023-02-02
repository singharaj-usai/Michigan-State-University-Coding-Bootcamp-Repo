const express = require('express');
const db = require('./config/connection');
// Require model
const { Library } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Finds all books
app.get('/all-books', (req, res) => {
  // Using model in route to find all documents that are instances of that model
  Library.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
    res.status(200).json(result);
  });
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
