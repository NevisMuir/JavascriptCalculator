let operationScreen=document.querySelector('#operationScreen')
//indicator for if mainScreen is a result of an operation
let indicator=false
//mainScreen is where we print the numbers and results
let mainScreen = document.querySelector('#mainScreen')
mainScreen.innerHTML=''
//this array will store numbers and results
let array = []

//All Clear function
let AC=document.querySelector('#AC')
AC.addEventListener('click',clear)
function clear(){
   operationScreen.innerHTML=''
   mainScreen.innerHTML=''
    array.splice(0);
}


function add (array){
    return Number(array[0])+Number(array[2])
}
function subtract(array){
    return Number(array[0])-Number(array[2])
}
function multiply (array){ 
    return Number(array[0])*Number(array[2])
}
function divide (array){
    return Number(array[0])/Number(array[2])
}

function operate (array){
    if(array[1] === '+'){return add(array)}
    if(array[1] === '-'){return subtract(array)}
    if(array[1] === '*'){return multiply(array)}
    if(array[1] === '/'){return divide(array)}
}
function answer(){
    //adds our new number to the end of the array for operation
    array.push(mainScreen.innerHTML)
    let answer=operate(array)
    operationScreen.innerHTML=''
    //puts our new answer on our main screen, and makes our answer new number`
    mainScreen.innerHTML=answer
    array.splice(0,3,mainScreen.innerHTML)
    indicator=true
}

//enter function
const enter=document.querySelector('#enter')
enter.addEventListener('click', ()=>{
    if(array.length==2&&mainScreen.innerHTML!=='')answer()
})
//backspace function
const backspace=document.querySelector('#backspace')
backspace.addEventListener('click', ()=>{
    if(mainScreen.innerHTML!=='' && indicator==false){
        let newString=mainScreen.innerHTML.slice(0,-1)
        mainScreen.innerHTML=newString
    }
})
//number buttons print number into mainScreen, saved in currentNumber
const numButtons = document.querySelectorAll(".num");
numButtons.forEach((numButton)=>{
    numButton.addEventListener('click', ()=>{
        //clears field if no previous operator
        if(indicator==true && array.length<2){
            clear()
            indicator=false
        }
        //keeps progress if operator already pressed
        if(indicator==true && array.length==2){
            operationScreen.innerHTML=array[0] + ' ' + array[1]
            mainScreen.innerHTML=''
            indicator=false 
        }
        //prevents multiple decimal points
        if(mainScreen.innerHTML.includes(".")&&numButton.innerHTML=='.')return
        //prevents multiple zeroes and numbers with more than 8 digits
        if(mainScreen.innerHTML.length>=8) return;
        //prevents double zeroes
        if(mainScreen.innerHTML=='0')mainScreen.innerHTML=''
        //prints number on screen
        mainScreen.innerHTML += numButton.innerHTML
    })
})
//operator press function
const operators = document.querySelectorAll(".operator");
operators.forEach((operator)=> {
    operator.addEventListener('click', ()=> {
        //start from fresh if result still stands
        if(indicator===true){
            array.splice(1,1,operator.id)
            mainScreen.innerHTML=''
            indicator=false
            operationScreen.innerHTML=array[0] + ' ' + array[1]
            return
        }
        //ignores if no input
        if(array.length==0 && mainScreen.innerHTML=='') return
        //enters first value if none
        if(array.length==0){
            array.push(Number(mainScreen.innerHTML),operator.id)
            mainScreen.innerHTML=''
        }
        //change operator before entering new number
        if(array.length==2&&mainScreen.innerHTML=='')array.splice(1,1,operator.id)
        //operate
        if(array.length==2&&mainScreen.innerHTML!==''){
            answer()
            array.push(operator.id)
            return
        }
        //publishes operation in progress to screen
        operationScreen.innerHTML=array[0] + ' ' + array[1]
   
    })
})





