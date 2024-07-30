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

function power(a,b) {
    return a ** b;
}

let operator = null;
let firstNum = null;
let secondNum = null;
let output = null;
let condition = false;
let condition2 = false;

function manipulate(operation, num) {
    num = Number(num);
    switch (operation) {
        case "posNeg":
            return posNeg(num);
            break;
        case "percentage":
            return percentage(num);
    }
}

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
            break;
        case "^":
            return power(num1,num2);
    }
}

let outputBox = document.getElementById("outputBox");
outputBox.textContent = 0;

document.getElementById("clear").addEventListener("click", () => {
    operator = null;
    firstNum = null;
    secondNum = null;
    output = null;
    outputBox.textContent = 0;
})

function updateDisplay(value) {
    if (outputBox.textContent.toString() == "0") {
        outputBox.textContent = ""
    }; 

    if (outputBox.textContent.length < 10) {
        outputBox.textContent += value;
    }
}

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => {
        if (condition == true) {
            outputBox.textContent = ""
        }
        updateDisplay(button.dataset.value)
        condition = false;
    })
})

let decimal = document.getElementById("decimal");
decimal.addEventListener("click", () => {
    if(!(outputBox.textContent.includes("."))) {
        updateDisplay(decimal.dataset.value);
    }
})

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        condition = true;
        if (condition2 == false) {
            equalsButton.click();
        }
        condition2 = false;
        firstNum = outputBox.textContent;
        operator = button.dataset.value;
    })
})


document.querySelectorAll(".manipulate").forEach(button => {
    button.addEventListener("click", () => {
        let output = manipulate(button.dataset.value, outputBox.textContent);
        if (output.toString().length > 10) {
            outputBox.textContent = output.toString().substring(0,10)
        } else {
            outputBox.textContent = output;
        }
    })
})


let equalsButton = document.getElementById("equals");

equalsButton.addEventListener("click", () => {
    if (condition2 == true) {
        firstNum = output;
    } else {
        secondNum = outputBox.textContent;
    };
    if (outputBox.textContent == 1337 && operator == null) {
        outputBox.textContent = "😎";
    } else if (outputBox.textContent == 28012001) {
        outputBox.textContent = "🍒";
    }
    output = operate(operator, firstNum, secondNum);

    if (output.toString().length > 10) {
        outputBox.textContent = output.toString().substring(0,10)
    } else if (operator == "/" && secondNum == 0) {
        alert("ur not funny");
    } else {
        outputBox.textContent = output;
    }
    condition2 = true;
})