let a={p:2}//call by reference
let y=a;
a.p=7;
console.log(y.p);


var c = 5;//call by value
var d;
d = c;
c = 3;
console.log(c);
console.log(d);