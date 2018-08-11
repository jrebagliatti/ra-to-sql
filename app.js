var parser = require('./ra-to-sql');
var fs = require('fs');

var args = process.argv.slice(2);

var input = args[0];

if (input) {
    if(fs.existsSync(input)){
        console.log("Parsing file " + input);
        console.log();

        var content = fs.readFileSync(input, 'UTF8');
        console.log(content);
        console.log();

        console.log(parser.getSql(content));
    }
    else {
        console.log("Parsing text " + input);
        console.log();

        console.log(parser.getSql(input));
    }
}
else {
    console.error("No input provided for parser");
}