var beautify = require('js-beautify');
var recurseDir = require('./recurseDir');
var reg = {
	css: /(<style[\s\S]*?>)([\s\S]*)(<\/style>)/ig,
	html: /(<template[\s\S]*?>)([\s\S]*)(<\/template>)/ig,
	js: /(<script[\s\S]*?>)([\s\S]*)(<\/script>)/ig
}

function beautifyVue (text, options) {
	options = options || {};
	var result = '';
	['css', 'html', 'js'].forEach(function (type) {
		reg[type].lastIndex = 0;
		var regResults = reg[type].exec(text);
		if (regResults)
			result += regResults[1] + '\n' + beautify[type](regResults[2], options[type]) + '\n' + regResults[3] + '\n\n';
	});
	return result.substr(0, result.length - 2);
}

beautifyVue.dir = function (dirPath, fn, filters) {
	if (filters) {
		if (typeof filters == 'string') {
			filters = [filters];
		}
		filters = new RegExp('\.' + filters.join('|') + '$', 'ig');
	}

	recurseDir(dirPath, function (data) {
			fn(beautifyVue(data));
		}, filters);
}

module.exports = beautifyVue;