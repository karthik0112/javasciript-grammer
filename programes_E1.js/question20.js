//console log
console.log("hell0");
//console.dir
let object = { property1 : 1, property1 : 2, method : function(){} };
console.dir(object);
//cosole.count
for (let i = 0; i < 5; i++) {
    console.count("myLabel");
}
//console.table
const array=["Audi", "Volvo", "Ford"]
console.table(array);
//console.time()andtimeEnd()
console.time();
const array1 = Array(1000);
for(let i=0; i<array1.length; i++) {
array1[i] = new Object();
}
console.timeEnd();  
//console.trace()
function foo() {
    function bar() {
      console.trace();
    }
    bar();
  }
    foo();
//console group and groupEnd
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();
console.log("and we are back.");    
//console.assert
function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}
assert();
