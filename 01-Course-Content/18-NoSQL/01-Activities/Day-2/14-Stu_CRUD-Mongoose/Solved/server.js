const express = require('express');
const db = require('./config/connection');
// Require model
const { Genre } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new document
app.post('/new-genre/:genre', (req, res) => {
  const newGenre = new Genre({ name: req.params.genre });
  newGenre.save();
  if (newGenre) {
    res.status(200).json(newGenre);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Finds all documents
app.get('/all-genres', (req, res) => {
  // Using model in route to find all documents that are instances of that model
  Genre.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });
});

// Find first document with name equal to "Kids"
app.get('/find-kids-genre', (req, res) => {
  Genre.findOne({ name: 'Kids' }, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });
});

// Finds first document that matches and deletes
app.delete('/find-one-delete/:genre', (req, res) => {
  Genre.findOneAndDelete({ name: req.params.genre }, (err, result) => {
    if (result) {
      res.status(200).json(result);
      console.log(`Deleted: ${result}`);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ message: 'something went wrong' });
    }
  });
});

// Finds the first document with the name with the value equal to 'Kids' and updates that name to the provided URL param value
app.post('/find-one-update/:genre', (req, res) => {
  // Uses findOneAndUpdate() method on model
  Genre.findOneAndUpdate(
    // Finds first document with name of "Kids"
    { name: 'Kids' },
    // Replaces name with value in URL param
    { name: req.params.genre },
    // Sets to true so updated document is returned; Otherwise original document will be returned
    { new: true, runValidators: true },
    (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Updated: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    }
  );
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
