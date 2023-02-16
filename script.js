var btn = document.getElementById("btn");
var numPtag = document.getElementById("num");
var res = document.getElementById("respond");
var inputValue = document.getElementById("guess").value;


function randomNumGenerator(){
    randomNum = Math.floor(Math.random()*40)-20;
    document.getElementById(num).innerText = randomNum;
    guessNum();
    print();
}

function guessNum(){
    input = Number(document.getElementById("guess").value);
}

function print(){
    if(Math.abs(randomNum - input) <=5){
        document.getElementById("raspond").innerText ="Hot";
    }else{
        document.getElementById("raspond").innerText ="Cold"; 
    }
}

    btn.addEventListener('click',randomNumGenerator);