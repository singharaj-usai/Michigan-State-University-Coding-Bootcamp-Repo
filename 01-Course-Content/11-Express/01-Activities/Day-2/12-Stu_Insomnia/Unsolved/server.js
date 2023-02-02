const express = require('express');
// TODO: Require the json file located in `/db`

// TODO: Create an `app` variable set to the value of `express()`

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// TODO: Create a GET route for `/api` that will return the content of our json file

// TODO: Have the app listen on port 3001
