// 1. Function calculator
// 2. Function kemarin diajdikan function expression

function calculate(num1, operator, num2) { // Calculator
    if (operator == "+") {
        return num1 + num2
    } else if (operator == "-") {
        return num1 - num2
    } else if (operator == "*") {
        return num1 * num2
    } else if (operator == "/") {
        return num1 / num2
    } else if (operator == "**") {
        return num1 ** num2
    } else if (operator == "%") {
        return num1 % num2
    } else {
        let errMsg = "Operator salah"
        return errMsg
    }
}

console.log(calculate(9,"*",13));

const toFahrenheit = function(celc) { // Function celcius ke fahrenheit versi expression
    let result = (celc * 9/5) + 32
    return result
}

console.log(toFahrenheit(20));