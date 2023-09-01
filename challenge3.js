/**
 * 1. Rubah function calculator menjadi arrow function
 * 2. Rubah function Konversi Celsius ke Fahrenheit menjadi arrow function dan currying
 */

const calculate = (num1, operator, num2) => {
    if (typeof(num1) == 'number' && typeof(num2) == 'number') {
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
            return "Operator salah"
        }
    } else {
        return "Number salah"                  
    }
}

// const toFahrenheit = (celc) => {
//     let result = (celc * 9/5) + 32
//     return result
// }

const fahrenheitCurry = (celc) => {
    return function (input1) {
        return function (input2) {
            return (celc * input1) + input2
        }
    }
}

console.log(fahrenheitCurry(20)(9/5)(32));