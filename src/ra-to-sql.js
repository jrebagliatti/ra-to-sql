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

            var fieldList = "SELECT DISTINCT *";

            if (element.value.fields != null) {
                fieldList = `SELECT ${element.value.fields.map(x => `null as ${x}`).join(',')} WHERE 1=2 UNION ${fieldList}`;
            }

            var newExpression = `(${fieldList} FROM ${element.value.expression})`;

            for(j = i + 1; j < result.length; j++){
                var elementToReplace = result[j];
                var valueToBeReplaced;

                if (elementToReplace.type == "identifier") {
                    valueToBeReplaced = elementToReplace.value.expression;
                }
                else {
                    valueToBeReplaced = elementToReplace.value.value;
                }

                console.log(`  Inspecting [${elementToReplace.type}] ${valueToBeReplaced}`);
                valueToBeReplaced = valueToBeReplaced.replace(new RegExp("\\(SELECT DISTINCT \\* FROM " + element.value.id + "\\)", 'g'), newExpression);

                if (elementToReplace.type == "identifier") {
                    elementToReplace.value.expression = valueToBeReplaced;
                }
                else {
                    elementToReplace.value.value = valueToBeReplaced;
                }
            }
        }
        else {
            console.log("Expression Found. Returning");
            break;
        }
    }

    var result = element.value.value || newExpression;

    return `SELECT DISTINCT * FROM ${result}`;
}

module.exports = {
    getSql
}