const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  //
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`

// TODO: Create a new instance of the model including the subdocuments

module.exports = Library;
