function add (array){
    return array[0]+array[1]
}
function subtract(array){
    return array[0]-array[1]
}
function multiply (array){
    console.log('multiply')
    return array[0]*array[1]
}
function divide (array){
    return array[0]/array[1]
}

function operate (array){
    if(currentOperator === '+'){return add(array)}
    if(currentOperator === '-'){return subtract(array)}
    if(currentOperator === '*'){return multiply(array)}
    if(currentOperator === '/'){return divide(array)}
}
//screen is where we print the numbers and results
let screen = document.querySelector('#screen')
screen.innerHTML=0
let currentNumber='0'
let currentOperator=''
//this array will store numbers and results
let numberArray = []

//number buttons print number into screen, saved in currentNumber
const numButtons = document.querySelectorAll(".num");
numButtons.forEach((numButton)=>{
    numButton.addEventListener('click', ()=>{
        if(currentNumber==0 && numButton.innerHTML==0) return;
        if(screen.innerHTML==0) currentNumber=""
        currentNumber += numButton.innerHTML
        screen.innerHTML = currentNumber
    })
})
const operators = document.querySelectorAll(".operator");
operators.forEach((operator)=> {
    operator.addEventListener('click', ()=> {
        //move current number into end of array
        numberArray.push(Number(screen.innerHTML));
        console.log(numberArray)
        //if array is over 3, cut first value
        if (numberArray.length>3)numberArray.shift()
        if (numberArray.length>2)numberArray.shift();
        console.log(numberArray)
        currentNumber=''
        //if current operator is empty,  save and await second number
        if (currentOperator == ''|| currentOperator=='enter'){currentOperator=operator.id
        return}
        //if current operator is not empty, run operate and return to screen
        if(currentOperator !==''){
            console.log(currentOperator)
            let result = operate(numberArray)
            currentOperator=operator.id            
            numberArray.push(result)
            if (length.numberArray>3)numberArray.shift()
            if (length.numberArray > 2)numberArray.shift()
            screen.innerHTML=result
        }
    })
})

