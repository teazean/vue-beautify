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

use cli , it will output the result to the stio.
	
	vue-beautify test.js
	vue-beautify ./src

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
	fs.readFile(filePath, 'utf8', function(err, data) {
		vueBeautify(data, options);
	});

	
	var filters = ['vue', 'vue2']; // suffix
	vueBeautify.dir('./src', function (beautifiedData, filePath) {
			console.log(beautifiedData);
		}, filters, options);



