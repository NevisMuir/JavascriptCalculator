function add (array){
    return array[0]+array[1]
}
function subtract(array){
    return array[0]-array[1]
}
function multiply (array){
    return array[0]*array[1]
}
function divide (array){
    return array[0]/array[1]
}

function operate (operator,a,b){
    if(operator = '+'){return add(numberArray)}
    if(operator = '-'){return subtract(numberArray)}
    if(operator = '*'){return multiply(numberArray)}
    if(operator = '/'){return divide(numberArray)}
}
//screen is where we print the numbers and results
let screen = document.querySelector('#screen')
currentNumber=''
//this array will store numbers and results
let numberArray = []

//number buttons print number into screen, saved in currentNumber
const numButtons = document.querySelectorAll(".num");
numButtons.forEach((numButton)=>{
    numButton.addEventListener('click', ()=>{
        currentNumber += numButton.innerHTML
        screen.innerHTML = currentNumber
    })
})

