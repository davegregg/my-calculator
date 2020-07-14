// Create buttons on the page for Add, Multiply, and Divide, 
// and write a click event listener for each button, which calls the calculator
// with the correct x and y values and the correct callback function
// You will need two textboxes: one for x, and one for y.


const mainElement = document.querySelector('main')
const outputElement = document.querySelector('#output')

const xInput = document.createElement('input')
xInput.type = "number"
xInput.setAttribute("placeholder", 0)
const yInput = document.createElement('input')
yInput.type = "number"
yInput.placeholder = "0"

const addButton = document.createElement('button')
addButton.append('Add')
const multiplyButton = document.createElement('button')
multiplyButton.append('Multiply')
const divideButton = document.createElement('button')
divideButton.append('Divide')

mainElement.append(
    'My Calculator',
    xInput,
    yInput, 
    addButton,
    multiplyButton,
    divideButton
)

function addHandler () {
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    const result = calculator(x, y, add)
    outputElement.innerHTML = result
}

addButton.addEventListener('click', addHandler)

multiplyButton.addEventListener('click', function () {
    outputElement.innerHTML = 
        calculator(
            Number(xInput.value), 
            Number(yInput.value), 
            multiply
        )
})

divideButton.addEventListener('click', function () {
    const x = Number(xInput.value)
    const y = Number(yInput.value)

    const result = calculator(x, y, divide)
    outputElement.innerHTML = result
})


