var parser = require('./ra').parser;

function getSql(ra) {
    parser.yy = require('./sql_scope');

    // TODO: Prepare input, by removing consecutive newlines
    var parsedRa = parser.parse(ra);

    for(i = 0; i < parsedRa.length; i++){
        var element = parsedRa[i];
        console.log(`Processing sentence ${i} of type ${element.type}`);

        if (element.type == "identifier") {
            console.log(`Looking for identifier "${element.value.id}" in following sentences`);

            var newExpression = `(${element.value.expression})`; 

            if (element.value.fields != null) {
                var fieldList = `SELECT ${element.value.fields.map(x => `null as ${x}`).join(',')} WHERE 1=2 UNION SELECT DISTINCT *`;
                newExpression = `(${fieldList} FROM ${element.value.expression})`;
            }

            for(j = i + 1; j < parsedRa.length; j++){
                var elementToReplace = parsedRa[j];
                var valueToBeReplaced;

                if (elementToReplace.type == "identifier") {
                    valueToBeReplaced = elementToReplace.value.expression;
                }
                else {
                    valueToBeReplaced = elementToReplace.value.value;
                }

                console.log(`  Inspecting [${elementToReplace.type}] ${valueToBeReplaced}`);
                valueToBeReplaced = valueToBeReplaced.replace(new RegExp("##" + element.value.id + "##", 'g'), newExpression);

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

    return `SELECT DISTINCT * FROM ${result.replace(new RegExp("(##)(\\S*)(##)", 'g'), "$2")}`;
}

function getExpression(ra) {
    parser.yy = require('./mathjax_scope');

    // TODO: Prepare input, by removing consecutive newlines
    var parsedRa = parser.parse(ra);

    var result = "";

    for(i = 0; i < parsedRa.length; i++){
        var element = parsedRa[i];
        console.log(`Processing sentence ${i} of type ${element.type}`);

        var sentence = element.value.value;

        if (element.type == "identifier") {
            if (element.value.fields != null) {
                sentence = `${element.value.id}_{(${element.value.fields.join(',')})} \\gets ${element.value.expression}`;
            }
            else {
                sentence = `${element.value.id} \\gets ${element.value.expression}`;
            }
        }
        else {

        }

        result += `$$\\mathsf{${sentence}}$$`
    }

    return result;
}

module.exports = {
    getSql,
    getExpression
}