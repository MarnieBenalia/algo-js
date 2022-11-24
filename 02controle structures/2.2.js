let min = prompt("give me a minimum number");
let max = prompt("give me a maximum number");
let current = prompt("give me a current number");

if ((current > min) && (current <= max)){
    console.log(current + " est bien entre " + min + " et " + max );
}

else if (min > max){
    
    console.log( " tu devrais peut-être revoir le principe du minimum et maximum" );
}

else{
    console.log ( "" );
}