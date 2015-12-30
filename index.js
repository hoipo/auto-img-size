#! /usr/bin/env node

var watching = require('./lib/watching');
var program = require('commander');
var path = process.cwd() + "/**/*.html";

program
    .version('0.1.0')
    .option('-m, --multiple <n>', 'An float argument', parseFloat)
    .action(function(options) {
        console.log(options)
    })
	.parse(process.argv);

var m = program.multiple || 1;
watching(path, m);
// console.log(path);
