###notice
if you want to use the origin js-beautify to format *.vue。just use the `cli: html-beautify` and `api: beautify.html`;

remember not to forget to set the value of options.unformatted and excluded the `template` tag. By Default, js-beautify will not format the `template` tag.

for example[$pwd: in the test dirctory]:
	
	// in .jsbeautifyrc
	{
		"unformatted": ["a","abbr","area","audio","b","bdi","bdo","br","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","img","input","ins","kbd","keygen","label","map","mark","math","meter","noscript","object","output","progress","q","ruby","s","samp","select","small","span","strong","sub","sup","svg","textarea","time","u","var","video","wbr","text","acronym","address","big","dt","ins","small","strike","tt","pre","h1","h2","h3","h4","h5","h6"],
		"indent_scripts": "keep"
	}
	// cli
	html-beautify folder/* -r

see the [js-beautify-options](https://github.com/beautify-web/js-beautify/)

##for using vue-beautify, you have no necessary set the `unformatted` options
###brief
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

you can use the same cli-params as js-beauty , and alse the `.jsbeautifyrc` config file.
	
	vue-beautify test.js
	vue-beautify ./src/* -r -S=keep

also if you have `.jsbeautifyrc`

	{
		"indent_scripts": "keep"
	}

you can use 
	
	vue-beautify ./src/* -r

**commonjs**
	
	var vueBeautify = require('vue-beautify');
	
	var options = {
		// the same as 'js-beautify' options
	}
	fs.readFile(filePath, 'utf8', function(err, data) {
		vueBeautify(data, options);
	});

###here are some options i recommend when you use vue-beautify
	
	{
		"intent_scripts": "keep"
	}


