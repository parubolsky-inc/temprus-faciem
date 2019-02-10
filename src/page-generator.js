const ejs = require('ejs');
//examples
let tpl = '<%= people.join(", "); %>'
let people = [];
let data = {people};

function render(tpl,data) {
  return ejs.render(tpl, data );
}
module.exports = render;
