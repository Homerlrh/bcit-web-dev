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

var a = lettercount("afjbanojfbaosibfiop");

var keys = Object.keys(a)

const temp = document.getElementById("abutton");

var output = '';

temp.addEventListener("click",function (){
    
    for (key of keys) {
        
        output += key+ " : " + a[key] + "\n";
    }
   
   document.getElementById("out").innerText = output ;
})

