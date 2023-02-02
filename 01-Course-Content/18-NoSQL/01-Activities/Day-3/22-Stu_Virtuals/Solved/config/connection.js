const { connect, connection } = require('mongoose');

connect('mongodb://localhost/fullnameVirtual', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
