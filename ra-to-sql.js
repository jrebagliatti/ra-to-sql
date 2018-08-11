var parser = require('./ra').parser;

parser.yy = require('./sql_scope');

function getSql(ra) {
    // TODO: Prepare input, by removing consecutive newlines
    var result = parser.parse(ra);

    for(i = 0; i < result.length; i++){
        var element = result[i];
        console.log(`Processing sentence ${i} of type ${element.type}`);

        if (element.type == "identifier") {
            console.log(`Looking for identifier "${element.value.id}" in following sentences`);
            for(j = i + 1; j < result.length; j++){
                var elementToReplace = result[j];
                var valueToReplace;

                if (elementToReplace.type == "identifier") {
                    valueToReplace = elementToReplace.value.expression;
                }
                else {
                    valueToReplace = elementToReplace.value.value;
                }

                console.log(`  Inspecting [${elementToReplace.type}] ${valueToReplace}`);
                valueToReplace = valueToReplace.replace(`(SELECT * FROM ${element.value.id})`, `(SELECT * FROM ${element.value.expression})`);

                if (elementToReplace.type == "identifier") {
                    elementToReplace.value.expression = valueToReplace;
                }
                else {
                    elementToReplace.value.value = valueToReplace;
                }
            }
        }
        else {
            console.log("Expression Found. Returning");
            break;
        }
    }

    return `SELECT * FROM ${element.value.value}`;
}

module.exports = {
    getSql
}