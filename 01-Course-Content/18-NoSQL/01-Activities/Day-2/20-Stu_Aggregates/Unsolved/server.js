const express = require('express');
const db = require('./config/connection');

const { Book } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/all-books', (req, res) => {
  Book.find({}, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.get('/sum-price', (req, res) => {
  Book.aggregate(
    [
      {
        $group: {
          _id: null,
          sum_price: { $sum: '$price' },
          avg_price: { $avg: '$price' },
          max_price: { $max: '$price' },
          min_price: { $min: '$price' },
        },
      },
    ],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    }
  );
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
