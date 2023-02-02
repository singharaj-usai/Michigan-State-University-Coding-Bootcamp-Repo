const { connect, connection } = require('mongoose');

connect('mongodb://localhost/postsTags', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
