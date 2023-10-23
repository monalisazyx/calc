function add(a ,b ){
    return a + b;
}
function subtract(a ,b ){
    return a - b;
}

function multiply(a ,b ){
    return a * b;

}
function divide(a ,b ){
    return a / b;
}

let operator;
let firstNum;
let secondNum;

let display = document.querySelector('.display');
let btn = document.querySelector('#btnNum');
for(let i = 0 ; i < 1 ; i++){

 btn.addEventListener('click', (e) => {
    let x = document.createElement('p');
    x.textContent = e.target.id;
    display.appendChild(x);
   });
}
 

function operate(a , b , operator){

    switch(operator){
        case '+':
            return add(a , b);
        case '-':
            return subtract(a , b);
        case '*':
            return multiply(a , b);
        case '/':
            return divide(a , b);
        default:
            return 'operator not found'
    }
            
  

    
}