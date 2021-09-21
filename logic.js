var result = document.getElementById('calc');
let history = document.getElementById('display');
result.value='';
function num(val){
    result.value += val;
    history.innerHTML+=val;
}

function calc(){
result.value=eval(result.value);
history.innerHTML =  history.innerHTML +" = " +   result.value +"<br> ";
result.value='';
   
}

function clr() {
    result.value='';
}

