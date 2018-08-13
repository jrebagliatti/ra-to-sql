var currentId = 0;

function getNewId(prefix){
    return prefix + ++currentId;
}

function getNot(input) {
    return "NOT " + input;
}

function getAnd(op1, op2) {
    return op1 + " AND " + op2;
}

function getOr(op1, op2) {
    return op1 + " OR " + op2;
}

function getBooleanOperation(op1, operation, op2) {
    return op1 + operation + op2;
}

function getUnion(sentence1, sentence2) {
    return `(SELECT DISTINCT * FROM ${sentence1} UNION ${sentence2}) AS ${getNewId("UNION")}`;
}

function getProduct(sentence1, sentence2) {
    return `(SELECT DISTINCT * FROM ${sentence1}, ${sentence2}) AS ${getNewId("PROD")}`;
}

function getSelection(table, alias, condition){
    return `(SELECT DISTINCT * FROM ${table} WHERE ${condition}) AS ${getNewId('SEL')}`;
}

function getProjection(table, alias, fieldList){
    return `(SELECT DISTINCT ${fieldList} FROM ${table}) AS ${getNewId('PROJ')}`;
}

function getSingleTable(tableName) {
    return `(SELECT DISTINCT * FROM ${tableName}) AS ${getNewId('ID')}`;
}

module.exports = {
    getNewId,
    getNot,
    getAnd,
    getOr,
    getBooleanOperation,
    getUnion,
    getSelection,
    getProjection,
    getSingleTable,
    getProduct
}