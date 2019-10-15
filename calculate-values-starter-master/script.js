const buttons = document.querySelectorAll(".button");
const answerElement = document.querySelector("#answer");
const inputElement = document.querySelector("#input");
const EnterInput = document.querySelector('#button-enter');
const user_reset = document.querySelector('#button-reset');

var sum = 0;;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    inputElement.innerText += button.innerText;
    console.log(inputElement.innerText);
  });
})

EnterInput.addEventListener('click' , function() {
  
  var num = inputElement.innerText;

  var a = [];
  let op;

 for (let i of num) {

   if(i == '+'){
     op = i;
     a = num.split(op);
    }

    if(i == '-'){
      op = i ; 
      a = num.split(op);
    }
  }

  if(op == '+'){
    for( let j of a ) {
      sum += Number(j);
    }
  }

  if(op == '-'){
    for( j of a ){
      sum -= Number(j);
   }
  }

  answerElement.innerText = sum;
  inputElement.innerText = '';
  //if(!isNaN(parseInt(num))){}
  //var sum = calculateValue(a.join(''));

})

user_reset.addEventListener('click' , function(){
  sum = 0;
  answerElement.innerText = 0;
  inputElement.innerText = '';

})


// 
/*EnterInput.addEventListener('click' , function() {
  const str = eval( inputElement.innerText );
  answerElement.innerText = str;
  inputElement.innerText = '';
})*/


/*function calculateValue(fn){
  return new Function ('return' +fn)();
}*/