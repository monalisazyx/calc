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

let output = document.querySelector('.output');
let display = document.querySelector('.display');
let btn = document.querySelector('#btnNum');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');
for(let i = 0 ; i < 1 ; i++){
 btn.addEventListener('click', (e) => {
    let x = document.createElement('p');
    x.textContent = e.target.id;
    if(e.target.id != '=' && e.target.id != 'btnNum'){
        output.appendChild(x);

    }

   });
};
clear.addEventListener('click' , () => {
    output.innerHTML = '';

});


equal.addEventListener('click', () => {
    let t = output.textContent;
    //let arr = t.split(/[+\-\x\/]/);
    let arr = t.match(/(\d+|[+\-x/])/g);
    let total = 0;

    for(let i = 0; i < arr.length ; i++){
        operator = arr[1];
        firstNum = arr[0];
        secondNum = arr[2];
        total = operate(+firstNum , +secondNum , operator);
        arr.splice(0 , 3 , total);
        
        
    }
    output.textContent = total;
    


    
})



   
  
        
    

   





function operate(a , b , operator){

    switch(operator){
        case '+':
            return add(a , b);
        case '-':
            return subtract(a , b);
        case 'x':
            return multiply(a , b);
        case '/':
            return divide(a , b);
        default:
            return 'operator not found'
    }
            
  

    
}