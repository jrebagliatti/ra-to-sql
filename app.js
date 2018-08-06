var parser = require('./ra-to-sql');

var args = process.argv.slice(2);

console.log(parser.getSql(args[0]));