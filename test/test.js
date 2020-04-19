var assert = require('assert');
var sql = require('../src/ra-to-sql');
var fs = require('fs');
var csvParser = require('csv-parse/lib/sync');
var sqlite3 = require('sqlite3').verbose();


describe('RA expression', function() {
    fs.readdirSync('./test/test-definitions/').forEach(file => {
        describe(file, function(){
            var fileContent = fs.readFileSync(`./test/test-definitions/${file}`, 'UTF8');
            var testDefinition = JSON.parse(fileContent);

            it("sql", function(done) {
                
                var db = new sqlite3.Database(':memory:');

                db.serialize(function() {

                    testDefinition.tables.forEach(tableDefinition => {
                        var table = tableDefinition.tableName;
                        console.log(`Processing table ${tableDefinition.definitionFile}`);

                        var records = getDataFromCsv(tableDefinition.definitionFile);

                        // Header
                        var statement = `CREATE TABLE ${table} (${records.header.map(x=>`${x.columnName} ${x.dataType}`).join(',')})`;
                        db.run(statement);

                        statement = `INSERT INTO ${table} VALUES (${records.header.map(x=>'?').join(',')})`;

                        var stmt = db.prepare(statement);
                        for(i = 0; i < records.rows.length; i++){
                            var row = records.rows[i];
                            stmt.run(row);
                        }    
                
                        if(stmt != null){
                            stmt.finalize();
                        }
                    });
                
                    db.all(sql.getSql(testDefinition.expression), function(err, rows) {
                        if(err) {
                            throw err;
                        }
                        
                        assert.deepEqual(rows, testDefinition.expectedResults);
                        done();
                    });
            
                });
            
                db.close();        
            });

            it("expression", function(){
                if (testDefinition.expectedExpression) {
                    assert.equal(sql.getExpression(testDefinition.expression), testDefinition.expectedExpression);
                }
                else {
                    
                }
            });    
        });
    });
});

function getDataFromCsv(csvFileName){
    var content = fs.readFileSync(`./test/table-definitions/${csvFileName}`, 'UTF8');

    var csvContent = csvParser(content);

    // Infer the data type of the columns
    var headerRow = csvContent[0];
    var rows = csvContent.slice(1);
    var header = [];

    for(var i = 0; i < headerRow.length; i++) {
        var columnName = headerRow[i];
        var dataType = "TEXT";

        var areAllNumbers = !rows.some(x => {
            // Check if some row cannot be casted as number
            if (x[i] == "") {
                return false;
            }

            return isNaN(x[i]);
        });

        if(areAllNumbers) {
            dataType = "INT";
        }

        header.push({columnName, dataType});
    }

    return {header, rows}
}