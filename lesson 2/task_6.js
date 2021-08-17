function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return addition(arg1, arg2);
            break;
        case '-':
            return subtraction(arg1, arg2);
            break;
        case '*':
            return multiplication(arg1, arg2);
            break;
        case '/':
            return division(arg1, arg2);
            break;
    }
}

console.log(mathOperation(34, 5, '+'));
console.log(mathOperation(34, 5, '-'));
console.log(mathOperation(34, 5, '*'));
console.log(mathOperation(34, 5, '/'));
