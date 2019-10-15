function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const temp = document.querySelector("#new-game");


temp.addEventListener("click", function(){
    const number1 =  getRandomIntInclusive(0, 10);
    const number2 =  getRandomIntInclusive(0, 10);
    const question = `What is ${number1} + ${number2}?`;
    answer = number1 + number2;
    console.log(number1, number2);
    document.querySelector("#question-text").innerHTML = question;
});



var answer;

const x = document.querySelector("#answer-form");
x.addEventListener("submit" ,function(e){
    e.preventDefault();

    var y =  document.getElementById("answer-input").value;

    if(answer == y ){
        document.getElementById("solution").innerHTML = "Correct 🤗";
        document.getElementById("solution").classList.add("good");
        document.getElementById("solution").classList.remove("bad");
    }else{
        document.getElementById("solution").innerHTML = "Incorrect 💩";
        document.getElementById("solution").classList.add("bad");
        document.getElementById("solution").classList.remove("good");
    }
});

