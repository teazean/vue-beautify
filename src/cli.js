#! /usr/bin/env node

var vueBeautify = require('./vue-beautify').dir;

var paths = process.argv.slice(2);
paths.forEach(function (path) {
	vueBeautify(path, function(result) {
		console.log(result);
	});
});