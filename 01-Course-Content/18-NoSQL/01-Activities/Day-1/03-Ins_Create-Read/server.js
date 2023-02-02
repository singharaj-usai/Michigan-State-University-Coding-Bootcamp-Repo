const express = require('express');
// Run npm install mongodb and require mongodb and MongoClient class
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

// Connection string to local instance of MongoDB including database name
const connectionStringURI = `mongodb://127.0.0.1:27017/shelterDB`;

// Declare a variable to hold the connection
let db;

// Creates a connection to a MongoDB instance and returns the reference to the database
mongodb.connect(
  // Defines connection between app and MongoDB instance
  connectionStringURI,
  // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    // Use client.db() constructor to add new db instance
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());

app.post('/create', (req, res) => {
  // Use db connection to add a document
  db.collection('petCollection').insertOne(
    { name: req.body.name, breed: req.body.breed },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get('/read', (req, res) => {
  // Use db connection to find all documents in collection
  db.collection('petCollection')
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});
