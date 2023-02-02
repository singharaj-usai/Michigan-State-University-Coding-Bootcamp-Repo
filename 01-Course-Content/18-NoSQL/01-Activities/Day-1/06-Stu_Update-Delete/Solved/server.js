const express = require('express');
const mongodb = require('mongodb').MongoClient;
// We import the ObjectId() function from MongoDB
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/inventoryDB`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());

app.post('/create', (req, res) => {
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get('/read', (req, res) => {
  db.collection('bookCollection')
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});

// To delete an object, the numerical id string must be wrapped with ObjectID()
app.delete('/delete', (req, res) => {
  // Use deleteOne() to delete one object
  db.collection('bookCollection').deleteOne(
    // This is the filter. We delete only the document that matches the _id provided in the request body,
    { _id: ObjectId(req.body.id) },
    (err) => {
      if (err) throw err;
      res.send("Document deleted");
    }
  );
});
