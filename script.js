let display=document.querySelector('#storedNum')
function clear(){
   display.innerHTML=''
   activeNum.innerHTML=''
    array.splice(0);
}

let AC=document.querySelector('#AC')
AC.addEventListener('click',clear)

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
    array.push(activeNum.innerHTML)
    let answer=operate(array)
    display.innerHTML=''
    activeNum.innerHTML=answer
    array.splice(0,3,activeNum.innerHTML)
    indicator=true
}
let indicator=false
//activeNum is where we print the numbers and results
let activeNum = document.querySelector('#activeNum')
activeNum.innerHTML=''
//this array will store numbers and results
let array = []
//enter function
const enter=document.querySelector('#enter')
enter.addEventListener('click', ()=>{
    if(array.length==2&&activeNum.innerHTML!=='')answer()
})

const backspace=document.querySelector('#backspace')
backspace.addEventListener('click', ()=>{
    if(activeNum.innerHTML!=='' && indicator==false){
        let newString=activeNum.innerHTML.slice(0,-1)
        activeNum.innerHTML=newString
    }
})
//number buttons print number into activeNum, saved in currentNumber
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
            display.innerHTML=array[0] + ' ' + array[1]
            activeNum.innerHTML=''
            indicator=false 
        }
        //prevents multiple decimal points
        if(activeNum.innerHTML.includes(".")&&numButton.innerHTML=='.')return
        //prevents multiple zeroes and numbers with more than 8 digits
        if(activeNum.innerHTML.length>=8) return;
        //prevents double zeroes
        if(activeNum.innerHTML=='0')activeNum.innerHTML=''
        activeNum.innerHTML += numButton.innerHTML
    })
})
//operator press function
const operators = document.querySelectorAll(".operator");
operators.forEach((operator)=> {
    operator.addEventListener('click', ()=> {
        //start from fresh if result still stands
        if(indicator===true){
            array.splice(1,1,operator.id)
            activeNum.innerHTML=''
            indicator=false
            display.innerHTML=array[0] + ' ' + array[1]
            return
        }
        //ignores if no input
        if(array.length==0 && activeNum.innerHTML=='') return
        //enters first value if none
        if(array.length==0){
            array.push(Number(activeNum.innerHTML),operator.id)
            activeNum.innerHTML=''
        }
        //change operator before entering new number
        if(array.length==2&&activeNum.innerHTML=='')array.splice(1,1,operator.id)
        if(array.length==2&&activeNum.innerHTML!==''){
            answer()
            array.push(operator.id)
            return
        }
        display.innerHTML=array[0] + ' ' + array[1]
   
    })
})
``



