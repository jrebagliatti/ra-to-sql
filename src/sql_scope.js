var currentId = 0;

function getNewId(prefix){
    return prefix + ++currentId;
}

function getNot(input) {
    return "NOT " + input;
}

function getBooleanExpression(op1, b_e, op2) {
    return `${op1} ${b_e} ${op2}`;
}

function getBooleanOperation(op1, operation, op2) {
    return op1 + operation + op2;
}

function getUnion(sentence1, sentence2) {
    return `(${getTableFromSentence(sentence1)} UNION ${getTableFromSentence(sentence2)}) AS ${getNewId("UNION")}`;
}

function getIntersection(sentence1, sentence2) {
    return `(${getTableFromSentence(sentence1)} INTERSECT ${getTableFromSentence(sentence2)}) AS ${getNewId("INTERSECT")}`;
}

function getSubtraction(sentence1, sentence2) {
    return `(${getTableFromSentence(sentence1)} EXCEPT ${getTableFromSentence(sentence2)}) AS ${getNewId("SUB")}`;
}

function getProduct(sentence1, sentence2) {
    return `(SELECT DISTINCT * FROM ${sentence1}, ${sentence2}) AS ${getNewId("PROD")}`;
}

function getNaturalJoin(sentence1, sentence2) {
    return `(${getTableFromSentence(sentence1)} NATURAL JOIN ${sentence2}) AS ${getNewId("NAT")}`;
}

function getSelection(table, alias, condition){
    return `(SELECT DISTINCT * FROM ${table} WHERE ${condition}) AS ${getNewId('SEL')}`;
}

function getProjection(table, alias, fieldList){
    return `(SELECT DISTINCT ${fieldList} FROM ${table}) AS ${getNewId('PROJ')}`;
}

function getRename(table, alias, fieldList){
    return `(SELECT DISTINCT ${fieldList.map(x => `null as ${x}`).join(',')} WHERE 1=2 UNION SELECT DISTINCT * FROM ${table}) AS ${getNewId('REN')}`;
}

function getSingleTable(tableName) {
    return `##${tableName}##`;
}

function getTableFromSentence(sentence) {
    return `SELECT DISTINCT * FROM ${sentence}`;
}

module.exports = {
    getNewId,
    getNot,
    getBooleanExpression,
    getBooleanOperation,
    getUnion,
    getSelection,
    getProjection,
    getSingleTable,
    getProduct,
    getIntersection,
    getSubtraction,
    getRename,
    getNaturalJoin
}