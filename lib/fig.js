'use strict';

const figlet = require('figlet');

const options = {
  font: 'Slant',
  horizontalLayout: 'default',
  verticalLayout: 'default'
};

let render = function(text) {
  return figlet.textSync(text, options);
};

module.exports = {
  render,
};
