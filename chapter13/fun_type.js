/*function fun(func){
    console.log(func());//call the function by it's parameters name

}
var array = [];
var f = function() {
    return true
}
fun(array);*///pass array instead of function


function fun(func){
    //Call the function but only if it is a function:
    if(typeof func == "function")
      console.log(func());
      else
      console.log("Its not a function");
}
var array = [];
var f = function () {}
fun(array);