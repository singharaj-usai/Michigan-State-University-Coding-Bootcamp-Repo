const express = require('express');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');

const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);

module.exports = app;
