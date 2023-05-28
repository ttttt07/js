
function sum(a,b){
    console.log(a+b);
}

function substract (a,b){
    console.log(a-b);
}

function multiply (a,b){
    console.log(a*b);
}

function divide (a,b){
 if(a==0){
    alert("error")
 }else{
    console.log(a/b);
 }
}



const operations = {
    sum:'+',
    substract:'-',
    multiply:'*',
    divide:'/'
}

function calculate({a,b,operation}){
    let result=null;

    switch(operation){
        case operations.sum:
            result=sum(a,b);
            break;
        case operations.substract:
            result=substract(a,b);
            break;
        case operations.multiply:
            result=multiply(a,b);
                break;
        case operations.divide:
            result=divide(a,b);
                    break;

        default:
            break;

    }
}


const inputfirstnum=document.querySelector('.input1num');
const inputsecondnum=document.querySelector('.input2num');
const selectoper=document.querySelector('.select');
const clickoper=document.querySelector('.click');
const resultoper=document.querySelector('.result');

clickoper.addEventListener('click',function(){
      const a=Number(inputfirstnum.value);
      const b=Number(inputsecondnum.value);
      const operation = selectoper.value;
      const result=calculate({
        a,
        b,
        operation
      });
      console.log(result);
});