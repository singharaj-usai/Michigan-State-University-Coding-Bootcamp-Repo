const express = require('express');
const db = require('./config/connection');
// Require model
const { Department } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new department
app.post('/new-department/:department', (req, res) => {
  const newDepartment = new Department({ name: req.params.department });
  newDepartment.save();
  if (newDepartment) {
    res.status(201).json(newDepartment);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Finds all departments
app.get('/all-departments', (req, res) => {
  // Using model in route to find all documents that are instances of that model
  Department.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
});

// Finds the first matching document
app.get('/find-wine-department', (req, res) => {
  // Using model in route to find all documents that are instances of that model
  Department.findOne({ name: 'Wine' }, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
});

// Finds first document matching parameter and deletes
// For demo, use 'Wine' as URL param
app.delete('/find-one-delete/:departmentName', (req, res) => {
  Department.findOneAndDelete(
    { name: req.params.departmentName },
    (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Deleted: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
      }
    }
  );
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
