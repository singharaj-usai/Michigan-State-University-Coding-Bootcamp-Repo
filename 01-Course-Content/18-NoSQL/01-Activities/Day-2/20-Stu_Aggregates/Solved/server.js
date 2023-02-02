const express = require('express');
const db = require('./config/connection');
// Require model
const { Book } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/all-books', (req, res) => {
  // Using model in route
  Book.find({}, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

// Get Aggregate Functions
app.get('/sum-price', (req, res) => {
  // Call aggregate() on model
  Book.aggregate(
    [
      // Filter books that are in stock
      { $match: { inStock: true } },
      {
        $group: {
          // Group by null (no additional grouping by id)
          _id: null,
          // Sum of all prices
          sum_price: { $sum: '$price' },
          // Average of all prices
          avg_price: { $avg: '$price' },
          // Maximum price
          max_price: { $max: '$price' },
          // Minimum price
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
