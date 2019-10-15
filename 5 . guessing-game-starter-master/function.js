function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const temp = document.querySelector("#new-game");

temp.addEventListener("click", function(){

    const number1 =  getRandomIntInclusive(0, 10);
    answer = number1;
    const question = "Guess a number between 0 and 10";
    document.querySelector("#guess-help").innerHTML = question;
    document.querySelector("#guess-help").classList.remove("good");
    document.querySelector("#guess-help").classList.remove("bad");

});



var answer;

const x = document.querySelector("#guess-form");
x.addEventListener("submit" ,function(e){
    e.preventDefault();

    var y =  document.querySelector("#guess-input").value;

    if(answer == y ){
        document.querySelector("#guess-help").innerHTML = "you are correct 🤗";
        document.querySelector("#guess-help").classList.add("good");
        document.querySelector("#guess-help").classList.remove("bad");
    }else if (answer < y){
        document.querySelector("#guess-help").innerHTML = y + " is too large, try again";
        document.querySelector("#guess-help").classList.add("bad");
        document.querySelector("#guess-help").classList.remove("good");
    }else if (answer > y){
        document.querySelector("#guess-help").innerHTML = y + " is too small, try again";
        document.querySelector("#guess-help").classList.add("bad");
        document.querySelector("#guess-help").classList.remove("good");
    }else{
        document.querySelector("#guess-help").innerHTML = " What you entered is not an number ";
    }
});

