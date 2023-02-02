const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// TODO: Invoke app.use() and serve static files from the '/public' folder
// To serve static files from the /public folder and create a route that serves the public/paths.html page, you can use the following code:
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

// TODO: Create a route that will serve up the `public/paths.html` page
app.get('/paths', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/paths.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
// This will serve static files from the /public folder and create a route at /routes that serves the public/paths.html page.
// When you navigate to http://localhost:3001/routes, the public/paths.html page will be displayed.