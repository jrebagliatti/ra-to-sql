var assert = require('assert');
var sql = require('../src/ra-to-sql');


describe('RA expressions', function() {
    it("Result shouldn't be null", function() {
        var result = sql.getSql("A-B");
        assert.notEqual(result, null, "Result should be different to null");
    });
});