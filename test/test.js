var assert = require('assert');
var sql = require('../src/ra-to-sql');
var fs = require('fs');
var csvParser = require('csv-parse/lib/sync');
var sqlite3 = require('sqlite3').verbose();


describe('RA expressions', function() {
    fs.readdirSync('./test/test-definitions/').forEach(file => {
        it(file, function(done) {
            var fileContent = fs.readFileSync(`./test/test-definitions/${file}`, 'UTF8');
            var testDefinition = JSON.parse(fileContent);
            
            var db = new sqlite3.Database(':memory:');

            db.serialize(function() {

                testDefinition.tables.forEach(tableDefinition => {
                    var table = tableDefinition.tableName;
                    console.log(`Processing table ${tableDefinition.definitionFile}`);

                    var records = getDataFromCsv(table);
                    var stmt;
                    for(i = 0; i < records.length; i++){
                        var row = records[i];
                
                        if(i == 0){
                            var statement = `CREATE TABLE ${table} (${row.map(x=>`${x} TEXT`).join(',')})`;
                            db.run(statement);
            
                            statement = `INSERT INTO ${table} VALUES (${row.map(x=>'?').join(',')})`;
                            stmt = db.prepare(statement);
                        } else {
                            stmt.run(row);
                        }
                    }    
            
                    if(stmt != null){
                        stmt.finalize();
                    }
                });
            
                db.all(sql.getSql(testDefinition.expression), function(err, rows) {
                    assert.deepEqual(rows, testDefinition.expectedResults);
                    done();
                });
        
            });
        
            db.close();        
        });
    });
});

function getDataFromCsv(csvFileName){
    var content = fs.readFileSync(`./test/table-definitions/${csvFileName}.csv`, 'UTF8');

    return csvParser(content);
}