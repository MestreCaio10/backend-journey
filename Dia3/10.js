function isEven(a) {
    return (a % 2 === 0);
}

function execute(callback, value){
    return callback(value);
}

console.log(execute(isEven, 5));