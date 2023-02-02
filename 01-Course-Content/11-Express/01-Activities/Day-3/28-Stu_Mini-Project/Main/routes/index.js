const express = require('express');

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');
const diagnosticsRouter = require('./diagnostics');

const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);
app.use('/diagnostics', diagnosticsRouter);

module.exports = app;
