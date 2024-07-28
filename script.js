function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function posNeg(num) {
    return -1 * num;
}

function percentage(num) {
    return num / 100;
}

let operator = null;
let firstNum = null;
let secondNum = null;

function operate(operation, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operation) {
        case "+":
            return add(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
            break;
        case "*":
            return multiply(num1,num2);
            break;
        case "/":
            return divide(num1,num2);
    }
}
