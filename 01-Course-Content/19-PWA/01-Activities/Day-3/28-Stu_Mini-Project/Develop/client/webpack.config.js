const path = require('path');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      cards: './src/js/cards.js'
    },

    // TODO: Add the correct output
    output: {
      
    },

    // TODO: Add the correct plugins
    plugins: [
     
    ],

    // TODO: Add the correct modules
    module: {

    }
  };
};
