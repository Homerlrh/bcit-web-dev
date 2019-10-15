function lettercount(string) {

   let container = {};

    for (let i = 0 ; i < string.length ; i++ ){

        var temp = string.charAt(i);

        if(container[temp]) {

            container[temp] += 1;

        }else {

            container[temp] = 1;

        }
    }
    return container; 
}

const temp = document.querySelector("#word-form");

temp.addEventListener("submit",function (e){

    e.preventDefault();

    var y =  document.querySelector("#word-input").value;

    var a = lettercount(y);

    var result = Object.keys(a).map(function(key) {
    
        return [key + " : " + a[key] + "\n"];

    })

    var myList = document.getElementById('letter-list');
    myList.innerHTML = '';


    for (var i = 0; i < result.length; i++) {
     
        var li = document.createElement('li');

        li.textContent = result[i];
    
        document.getElementById('letter-list').appendChild(li);
    }

    

    result = "";
   
})
