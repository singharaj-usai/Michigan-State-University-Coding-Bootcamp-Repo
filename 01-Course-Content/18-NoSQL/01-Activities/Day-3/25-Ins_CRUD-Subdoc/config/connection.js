const { connect, connection } = require('mongoose');

connect('mongodb://localhost/videosAndResponses', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
