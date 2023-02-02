const fb = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the feedback
fb.get('/', (req, res) => {
  console.info(`${req.method} request received for feedback`);

  readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting feedback
fb.post('/', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to submit feedback`);

  // Destructuring assignment for the items in req.body
  const { email, feedbackType, feedback } = req.body;

  // If all the required properties are present
  if (email && feedbackType && feedback) {
    // Variable for the object we will save
    const newFeedback = {
      email,
      feedbackType,
      feedback,
      feedback_id: uuid(),
    };

    readAndAppend(newFeedback, './db/feedback.json');

    const response = {
      status: 'success',
      body: newFeedback,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

module.exports = fb;
