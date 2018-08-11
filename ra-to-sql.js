var parser = require('./ra').parser;

parser.yy = require('./sql_scope');

function getSql(ra) {
    // TODO: Prepare input, by removing consecutive newlines
    var result = parser.parse(ra);

    return result;
}

module.exports = {
    getSql
}