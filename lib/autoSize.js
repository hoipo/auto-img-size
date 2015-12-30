var cheerio = require('cheerio');
var images = require('images');
var fs = require('fs');

var autoSize = function(url, multiple) {
	var _multiple = multiple || 1;
	var fileContents = fs.readFileSync(url, {
		encoding: 'utf-8'
	});
	var isChanged = false;
	var $ = cheerio.load(fileContents);
	var imgs = $('img');
	for (var i = 0; i < imgs.length; i++) {
		var _path = $('img')[i].attribs.src;
		var _size = images(_path).size();
		if (!$('img')[i].attribs.width || !$('img')[i].attribs.height) {
			$('img:nth-child(' + (i + 1) + ')').attr('width', _size.width * _multiple);
			$('img:nth-child(' + (i + 1) + ')').attr('height', _size.height * _multiple);
			console.log("handled \"" + $('img')[i].attribs.src + "\" in file \"" + url + "\"");
			isChanged = true;
		}
	};
	if (isChanged) {
		fs.writeFileSync(url, $.html());
		console.log("write file successfully!");
	}
}

module.exports = autoSize;