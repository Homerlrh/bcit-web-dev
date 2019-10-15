a = ['1','3','+','3'];



function calculator (arr){

    var str = arr.join('');

    var b = eval(str);

    document.getElementById("p").innerText = b ;
}

calculator(a);