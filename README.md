###for vue
a formatter for vue module use [js-beautify](https://github.com/beautify-web/js-beautify/)

	<style>
	// **
	</style>
	<template>
	// **
	</template>
	<script>
	// **
	</script>

###install
	
	npm install -g vue-beautify
	npm install vue-beautify

###usage 

**cli**
	
	vue-beautify test.js
	vue-beautify ./src
	// or
	vue-beautify test.js ./src

**commonjs**
	
	var vueBeautify = require('vue-beautify');
	
	var options = {
		js: {
			// the same as 'js-beautify' js options
		},
		html: {
			// the same as 'js-beautify' html options
		},
		css: {
			// the same as 'js-beautify' css options
		}
	}
	fs.readFile(dirPath, 'utf8', function(err, data) {
		vueBeautify(data, options);
	});

	
	var filters = ['vue', 'vue2']; // suffix
	vueBeautify.dir('./src', filters, options);



