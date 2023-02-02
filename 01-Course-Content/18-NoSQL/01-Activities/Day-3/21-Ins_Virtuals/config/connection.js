const { connect, connection } = require('mongoose');

connect('mongodb://localhost/commentExample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
