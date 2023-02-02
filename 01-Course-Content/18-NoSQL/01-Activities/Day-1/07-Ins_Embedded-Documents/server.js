const express = require('express');
const mongodb = require('mongodb').MongoClient;
const data = require('./models/data');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/groceryListDB`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    // Drops any documents, if they exist
    db.collection('groceryList').deleteMany({});
    // Adds data to database
    db.collection('groceryList').insertMany(data, (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log(res);
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());

// This will return any documents with embedded documents that match
app.get('/sale-over-30', (req, res) => {
  db.collection('groceryList')
    // Use dot notation for embedded document
    // $gte specifies we want percentage discounts greater than 30
    .find({ 'promotion.percentage_discount': { $gte: 30 } })
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});
