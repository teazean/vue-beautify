var beautify = require('js-beautify');

var templateReg = /(<\/?)template([\s\S]*?>)/ig;
var vueBeautifyDivReg = /(<\/?)vueBeautifyDiv([\s\S]*?>)/ig;

function beautifyVue (text, options) {
	if (!text) {
		return;
	}
	text = text.replace(templateReg, function(match, begin, end) {
		return begin + 'vueBeautifyDiv' + end;
	});
	text = beautify.html(text, options);
	return text.replace(vueBeautifyDivReg, function(match, begin, end) {
		return begin + 'template' + end;
	});
}

module.exports = beautifyVue;