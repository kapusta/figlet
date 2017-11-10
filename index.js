const figlet = require('figlet');

const options = {
  font: 'Slant',
  horizontalLayout: 'default',
  verticalLayout: 'default'
};

let renderText = function(text, opt) {
  return figlet.textSync(text, opt);
};

console.log(renderText('Hello', options));
