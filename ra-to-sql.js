var parser = require('./ra').parser;

parser.yy = require('./scope');

function getSql(ra) {
    var result = parser.parse(ra);

    return result;
}

module.exports = {
    getSql
}