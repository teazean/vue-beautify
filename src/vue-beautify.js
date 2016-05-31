var beautify = require('js-beautify');

var templateReg = /(<\/?)template([\s\S]*?>)/ig;
var vueBeautifyDivReg = /(<\/?)vueBeautifyDiv([\s\S]*?>)/ig;
var oldHtmlBeautify = beautify.html;

beautify.html = function (text, options) {
	text = text.replace(templateReg, function(match, begin, end) {
		return begin + 'vueBeautifyDiv' + end;
	});
	text = oldHtmlBeautify(text, options);
	return text.replace(vueBeautifyDivReg, function(match, begin, end) {
		return begin + 'template' + end;
	});
}

function beautifyVue (text, options) {
	if (!text) {
		return;
	}
	return beautify['html'](text, options);
}

module.exports = beautifyVue;