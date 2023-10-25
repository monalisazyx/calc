
//basic functions to perform operations
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

//select html elements
let output = document.querySelector('.output');
let display = document.querySelector('.display');
let btn = document.querySelector('#btnNum');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let del = document.querySelector('.delete');


//loop through every button
for(let i = 0 ; i < 1 ; i++){
 btn.addEventListener('click', (e) => {
    let x = document.createElement('p');  //when button clicked, create paragraph
    x.textContent = e.target.id;       //target the id of button clicked
    if(e.target.id != '=' && e.target.id != 'btnNum'){ //when div id is clicked, not output
        output.appendChild(x);                         //display the id of button clicked

    }

   });
};

//when clear button clicked
clear.addEventListener('click' , () => {
    output.innerHTML = '';   //clear out the contents of div

});

//when equal button clicked
equal.addEventListener('click', () => {
    let t = output.textContent;    
    let arr = t.match(/(\d+|[+\-x/])/g);  //splits the content into array based on operators
    
    let total = 0; 

    for(let i = 0; i < arr.length ; i++){   //loops through content of output
        operator = arr[1];  //selects the operator
        firstNum = arr[0];  //value preceding the operator
        secondNum = arr[2];  //value succeeding the operator
        
        total = operate(+firstNum , +secondNum , operator);  //operates and calculates result
        arr.splice(0 , 3 , total);  //removes the three values and instead replaces with total
        
        
    }
    if(!Number.isInteger(total)  && total.toString().length > 5){ //if result is a decimal
        output.textContent = total.toFixed(5);   //and has more than 5 decimal digits
                                                   //round the number to 5 decimal  digits
    }
    else{       //if result is not a decimal
        output.textContent = total;  //display the result


    }
});

del.addEventListener('click', () => {
    let x = output.textContent;   
    let arr = x.split('');
    arr.pop();  //removes the last element and modifies array

    output.textContent = arr.join('');  //updates display 
});



function operate(a , b , operator){  

    switch(operator){  //if operator equals to
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