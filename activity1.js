var empty=0;
function update(){
    empty=empty+1;
document.getElementById("result").innerHTML=empty;

}


function save(){
    localStorage.setItem("score", empty);


}


function next(){


}

function getscore(){
    document.getElementById("extract").innerHTML=localStorage.getItem("score");


}

function minus(){
    empty=empty-1;
document.getElementById("minus").innerHTML=empty;

}