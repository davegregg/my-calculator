// Create a calculator function which accepts two numbers and an operator function (a callback)

// const add = (x, y) => x + y
function add (x, y) {
    return x + y
}

function multiply (x, y) {
    return x * y
}

function divide (x, y) {
    return x / y
}

let CALCULATOR_POWER = 'on'
function calculator (x, y, equipment) { // callback
    if (CALCULATOR_POWER === 'on') {
        return equipment(x, y)
    } else {
        return null
    }
}

const addOutput = calculator(1, 2, add)
const multiplyOutput = calculator(1, 2, multiply)
const divideOutput = calculator(1, 2, divide)

console.log({ addOutput, multiplyOutput, divideOutput })
