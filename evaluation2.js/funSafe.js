"use strict";
const f = function(){return "This is function";}
function fun(func){
    //Call the function but only if it is a function:
    if(typeof func == "function")
      console.log(func());
      else
      console.log("Its not a function");
}

fun(f);
fun();

/*let obj = {};
let f = function(){return "This is function";}

function myFunction(func){  
    (typeof func == "function")?console.log(func()):console.log("This is not function");   
}   
myFunction(obj);     //pass object instead of function 
myFunction(f);*/