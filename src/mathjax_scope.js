var currentId = 0;

function getNewId(prefix){
    return prefix + ++currentId;
}

function getNot(input) {
    return "!" + input;
}

function getBooleanExpression(op1, b_e, op2) {
    var parsedOperator = "\\l" + b_e.toLowerCase();

    return `${op1} ${parsedOperator} ${op2}`;
}

function getBooleanOperation(op1, operation, op2) {
    return `${op1} ${operation} ${op2}`;
}

function getUnion(sentence1, sentence2) {
    return `${getTableFromSentence(sentence1)} \\cup ${getTableFromSentence(sentence2)}`;
}

function getIntersection(sentence1, sentence2) {
    return `${getTableFromSentence(sentence1)} \\cap ${getTableFromSentence(sentence2)}`;
}

function getSubtraction(sentence1, sentence2) {
    return `${getTableFromSentence(sentence1)} - ${getTableFromSentence(sentence2)}`;
}

function getProduct(sentence1, sentence2) {
    return `${sentence1} \\times ${sentence2}`;
}

function getNaturalJoin(sentence1, sentence2) {
    return `${getTableFromSentence(sentence1)} \\bowtie ${sentence2}`;
}

function getSelection(table, alias, condition){
    return `\\sigma_{(${condition})}(${table})`;
}

function getTheta(sentence1, sentence2, condition) {
    return `${getTableFromSentence(sentence1)} \\underset{${condition}}{\\bowtie} ${sentence2}`;
}

function getProjection(table, alias, fieldList){
    return `\\pi_{(${fieldList})}(${table})`;
}

function getRename(table, alias, fieldList){
    return `\\rho_{(${fieldList.join(',')})}(${table})`;
}

function getSingleTable(tableName) {
    return `${tableName}`;
}

function getTableFromSentence(sentence) {
    return `${sentence}`;
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
    getNaturalJoin,
    getTheta
}