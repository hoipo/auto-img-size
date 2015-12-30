var chokidar = require('chokidar');
var autoSize = require('./autoSize');
var watching = function(url, multiple) {
	chokidar.watch(url, {
		ignored: /[\/\\]\./
	}).on('add', (path) => {
		console.log("add", path);
	}).on('change', (path)=>{
		console.log("change", path);
		autoSize(path, multiple);
	});
}

module.exports = watching;