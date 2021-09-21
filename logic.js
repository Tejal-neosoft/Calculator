var result = document.getElementById('calc');
let history = document.getElementById('display');
result.value='';

// Getting the input value
function num(val){
    result.value += val;
    history.innerHTML+=val; //History Log
}

//Calculating the result
function calc(){
result.value=eval(result.value);
history.innerHTML =  history.innerHTML +" = " +   result.value +"<br> "; //History Log
result.value='';
}

//Clear Display Area
function clr() {
    result.value='';
    history.innerHTML+='<br>';//history Log
}
//BackSpace Operation
del =()=>{
    var a = result.value;
    result.value = a.substr(0,a.length-1);
    history.innerHTML=result.value;
}