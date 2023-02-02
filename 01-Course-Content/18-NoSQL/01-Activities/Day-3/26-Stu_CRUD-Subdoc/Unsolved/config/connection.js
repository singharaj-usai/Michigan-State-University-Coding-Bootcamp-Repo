const { connect, connection } = require('mongoose');

connect('mongodb://localhost/developersApplications', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
