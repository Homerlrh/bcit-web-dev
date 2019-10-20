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
  var item = "";
  var a = [];
 
  for (let i = 0 ; i < num.length ; i++) {
    if(num[i] != "+" && num[i] != "-"){
      item += num[i];
    } else {
      a.push(item);
    }
    
  }

  console.log(a);

  sum = Number(a[0]);
  for (let j = 0 ; j < a.length ; j++) {    
    if(isNaN(a[j]) === true){
      if(a[j] == "+") {
        sum += Number(a[j+1]);
        j = j + 2;
      }
      if(a[j] == "-") {
        sum -= Number(a[j+1]);
        j = j + 2;
      }
    }

    // if(a[j] == "-"){continue;}
    // sum -= Number(a[j]);

  }
  console.log(sum);
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