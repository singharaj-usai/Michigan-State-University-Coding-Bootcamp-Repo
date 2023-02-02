const express = require('express');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
// TODO: import your diagnostics route

const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);
// TODO: Initialize diagnostics route

module.exports = app;
