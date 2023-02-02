const path = require('path');

// This route path will match requests to the root route / and serve the index.html file in the client's dist folder
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
