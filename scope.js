var currentId = 0;

function getNewId(prefix){
    return prefix + ++currentId;
}

module.exports = {
    getNewId
}