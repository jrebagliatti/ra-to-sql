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
    return sentence1 + " UNION " + sentence2;
}

function getSelection(table, alias, condition){
    return "SELECT * FROM (" + table + ") AS " + alias + " WHERE " + condition;
}

function getProjection(table, alias, fieldList){
    return "SELECT " + fieldList + " FROM (" + table + ") AS " + alias
}

module.exports = {
    getNewId,
    getNot,
    getAnd,
    getOr,
    getBooleanOperation,
    getUnion,
    getSelection,
    getProjection
}