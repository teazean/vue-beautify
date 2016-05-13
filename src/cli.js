var vueBeautify = require('./vue-beautify').dir;

var paths = process.argv.slice(2);
paths.forEach(function (path) {
	vueBeautify(path);
});