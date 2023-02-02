const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const Genre = mongoose.model('Genre', genreSchema);

const handleError = (err) => console.error(err);

// Will add data only if collection is empty to prevent duplicates
// More than one document can have the same name value
Genre.find({}).exec((err, collection) => {
  if (collection.length === 0) {
    Genre.insertMany(
      [
        { name: 'Kids' },
        { name: 'Kids' },
        { name: 'Kids' },
        { name: 'Romance' },
        { name: 'Mystery' },
        { name: 'Contemporary' },
        { name: 'Biography' },
      ],
      (insertErr) => {
        if (insertErr) {
          handleError(insertErr);
        }
      }
    );
  }
});

module.exports = Genre;
