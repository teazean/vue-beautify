var vueBeautify = require('../src/vue-beautify');
var fs = require('fs');

var options = {
    'indent_size': 4,
    'indent_scripts': 'keep'
}
fs.readFile('./folder/app.vue', 'utf8', function(err, data) {
    console.log(vueBeautify(data, options));
});