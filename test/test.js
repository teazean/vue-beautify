var beautify = require('../src/vue-beautify');
var fs = require('fs');

beautify.dir('./folder', function(data, filepath) {
	console.log(filepath);
	fs.writeFile(filepath, data);
}, ['vue', 'js']);