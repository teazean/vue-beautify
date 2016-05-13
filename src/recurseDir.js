var path = require('path');
var fs = require('fs');

function recurseDir(dirPath, hander, filtersReg) {
	fs.stat(dirPath, function (err, stats) {
		if (err) {
			throw new Error('file: ' + dirPath + ' not found');
		} else {
			if(stats.isDirectory()) {
				fs.readdir(dirPath, function (err, files) {
					if (err) {
						throw new Error('file: ' + dirPath + ' not found');
					} else {
						files.forEach(function (file) {
							var filePath = path.join(dirPath, file);
							recurseDir(filePath, hander);
						});
					}
				});
			} else {
				if (filtersReg && !filtersReg.test(dirPath)) {
					return;
				} 
				fs.readFile(dirPath, 'utf8', function(err, data) {
					if (err) {
						throw new Error('read file: ' + dirPath + ' error');
					}
					hander(data, dirPath);
				});
			}
		}
	});
}

module.exports = recurseDir;