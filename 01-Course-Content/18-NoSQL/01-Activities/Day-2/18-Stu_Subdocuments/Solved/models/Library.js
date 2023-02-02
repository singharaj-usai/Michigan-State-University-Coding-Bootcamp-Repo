const mongoose = require('mongoose');

// Child documents or subdocuments can be embedded into a parent document
// The bookSchema defines the schema of the subdocument
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
});

// The librarySchema defines the schema of the parent document
const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // This will include an array that holds all the books
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// Uses mongoose.model() to create model
const Library = mongoose.model('Library', librarySchema);

// Uses model to create new instance including subdocument
const bookData = [
  { title: 'Diary of Anne Frank', price: 10 },
  { title: 'One Thousand Years of Solitude', price: 20 },
  { title: 'History of Hogwarts', price: 5 },
];

Library.create({ name: 'Books', books: bookData }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

module.exports = Library;
