const express = require('express');

const app = express();
const PORT = 3001;

const middleware = (req, res, next) => {
  // ANSI escape code that instructs the terminal to print in yellow
  const yellow = '\x1b[33m%s\x1b[0m';

  // Log out the request type and resource
  console.log(yellow, `${req.method} request to ${req.path}`);

  // Built-in express method to call the next middleware in the stack.
  next();
};

app.use(middleware);

app.get('/', (req, res) => res.json(`GET route`));
app.post('/', (req, res) => res.json(`POST route`));
app.put('/:id', (req, res) => res.json(`PUT route`));
app.delete('/:id', (req, res) => res.json(`DELETE route`));
app.patch('/:id', (req, res) => res.json(`PATCH route`));

app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}! 🏎️`)
);
