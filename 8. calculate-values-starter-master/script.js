const buttons = document.querySelectorAll(".button");
const answerElement = document.querySelector("#answer");
const inputElement = document.querySelector("#input");
const EnterInput = document.querySelector("#button-enter");
const user_reset = document.querySelector("#button-reset");
var sum = 0;;
var list = [];

buttons.forEach(button => {
  button.addEventListener("click", () => {
    inputElement.innerText += button.innerText;
    console.log(inputElement.innerText);
  });
})

EnterInput.addEventListener("click" , function() {
  
  var num = inputElement.innerText;
  var item = num[0];
 
  for (let i = 1 ; i < num.length ; i++) {
    if(isNaN(num[i]) === false){
      item += num[i];
    } else {
      list.push(item);
      list.push(num[i]);
      list.push(num[i+1]);
      item = "";
   }
  }

  console.log(list);

  sum = Number(list[0]);
  for (let j = 0 ; j < list.length ; j++) {    
    if(isNaN(list[j]) === true){
      if(list[j] == "+") {
        sum += Number(list[j+1]);
        j = j + 2;
      }
      if(list[j] == "-") {
        sum -= Number(list[j+1]);
        j = j + 2;
      }
    }
  }
  console.log(sum);
  answerElement.innerText = sum;
  sum = 0;
  list = [];
})

user_reset.addEventListener("click" , function(){
  list = [];
  sum = 0;
  answerElement.innerText = 0;
  inputElement.innerText = "";
})
